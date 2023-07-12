"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const alerta_entity_1 = require("../entities/alerta.entity");
const infractor_alerta_entity_1 = require("../entities/infractor_alerta.entity");
const infractor_service_1 = require("../../infractor/services/infractor.service");
let AlertaService = class AlertaService {
    constructor(alertaRepository, infractorAlertaRepository, infractorService) {
        this.alertaRepository = alertaRepository;
        this.infractorAlertaRepository = infractorAlertaRepository;
        this.infractorService = infractorService;
        this.logger = new common_1.Logger('AlertaService');
    }
    async create(createAlertaDto) {
        try {
            const { infractores } = createAlertaDto, rest = __rest(createAlertaDto, ["infractores"]);
            const alerta = this.alertaRepository.create(rest);
            await this.alertaRepository.save(alerta);
            if ((infractores === null || infractores === void 0 ? void 0 : infractores.length) == 0)
                return alerta;
            infractores.forEach(async (infractorID) => {
                console.log(infractorID);
                const infractorDB = await this.infractorService.findOne(infractorID);
                if (!infractorDB)
                    return;
                const infractorAlerta = this.infractorAlertaRepository.create({ alerta, infractor: infractorDB });
                console.log(infractorAlerta);
                await this.infractorAlertaRepository.save(infractorAlerta);
            });
            return alerta;
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async findAll() {
        try {
            return await this.alertaRepository.find({
                relations: ['imagenes', 'infractores', 'infractores.infractor']
            });
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async findOne(id) {
        try {
            const alerta = await this.alertaRepository.findOne({ where: { id }, relations: ['imagenes', 'infractores', 'infractores.infractor'] });
            if (!alerta)
                throw new common_1.BadRequestException(`La alerta con id: ${id} no existe`);
            return alerta;
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async update(id, updateAlertaDto) {
        try {
            const { infractores } = updateAlertaDto, rest = __rest(updateAlertaDto, ["infractores"]);
            const alerta = await this.findOne(id);
            await this.alertaRepository.update(alerta.id, Object.assign({}, rest));
            return await this.findOne(id);
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async remove(id) {
        try {
            const alerta = await this.findOne(id);
            const alertaDeleted = await this.alertaRepository.delete(alerta.id);
            return alertaDeleted;
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    handlerError(error) {
        this.logger.error(error.message);
        if (error.code === '23505')
            throw new common_1.BadRequestException(error.detail);
        throw new common_1.InternalServerErrorException(error.message);
    }
};
AlertaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(alerta_entity_1.Alerta)),
    __param(1, (0, typeorm_1.InjectRepository)(infractor_alerta_entity_1.InfractorAlertaEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        infractor_service_1.InfractorService])
], AlertaService);
exports.AlertaService = AlertaService;
//# sourceMappingURL=alerta.service.js.map