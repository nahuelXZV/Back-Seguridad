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
exports.InfraccionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const infraccion_entity_1 = require("../entitites/infraccion.entity");
const typeorm_2 = require("typeorm");
const estadio_service_1 = require("./estadio.service");
const users_service_1 = require("../../users/services/users.service");
const infractor_service_1 = require("./infractor.service");
let InfraccionService = class InfraccionService {
    constructor(infraccionRepository, infractorService, estadioService, userService) {
        this.infraccionRepository = infraccionRepository;
        this.infractorService = infractorService;
        this.estadioService = estadioService;
        this.userService = userService;
        this.logger = new common_1.Logger('InfraccionService');
        this.relations = ['estadio', 'creador', 'sansion', 'testigos', 'documentos'];
    }
    async create(createInfraccionDto) {
        try {
            const { estadio, creador, infractor } = createInfraccionDto, res = __rest(createInfraccionDto, ["estadio", "creador", "infractor"]);
            const estadioEntity = await this.estadioService.findOne(estadio);
            const creadorEntity = await this.userService.findOne(creador);
            const infractorEntity = await this.infractorService.findOne(infractor);
            const infraccionEntity = this.infraccionRepository.create(Object.assign(Object.assign({}, res), { estadio: estadioEntity, creador: creadorEntity, infractor: infractorEntity }));
            await this.infraccionRepository.save(infraccionEntity);
            return this.findOne(infraccionEntity.id);
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async findAll(paginationDto) {
        try {
            const { limit, offset } = paginationDto;
            if (limit && offset)
                return await this.infraccionRepository.find({ relations: this.relations, skip: offset, take: limit, order: { createdAt: 'DESC' } });
            if (limit)
                return await this.infraccionRepository.find({ relations: this.relations, take: limit, order: { createdAt: 'DESC' } });
            return await this.infraccionRepository.find({ relations: this.relations, order: { createdAt: 'DESC' } });
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async findOne(id) {
        try {
            const infraccionEntity = await this.infraccionRepository.findOne({ where: { id }, relations: this.relations });
            if (!infraccionEntity)
                throw new common_1.BadRequestException(`La infraccion con id ${id} no existe`);
            return infraccionEntity;
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async update(id, updateInfraccionDto) {
        try {
            const { estadio, creador, infractor } = updateInfraccionDto, res = __rest(updateInfraccionDto, ["estadio", "creador", "infractor"]);
            const infracionEntity = await this.findOne(id);
            const infraccionUpdated = await this.infraccionRepository.update(infracionEntity.id, Object.assign({}, res));
            if (infraccionUpdated.affected === 0)
                throw new common_1.BadRequestException(`La infraccion con id ${id} no existe`);
            return this.findOne(id);
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async remove(id) {
        try {
            const infraccionEntity = await this.findOne(id);
            const infraccionDeleted = await this.infraccionRepository.delete(infraccionEntity.id);
            if (infraccionDeleted.affected === 0)
                throw new common_1.BadRequestException(`La infraccion con id ${id} no existe`);
            return infraccionEntity;
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
InfraccionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(infraccion_entity_1.InfraccionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        infractor_service_1.InfractorService,
        estadio_service_1.EstadioService,
        users_service_1.UsersService])
], InfraccionService);
exports.InfraccionService = InfraccionService;
//# sourceMappingURL=infraccion.service.js.map