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
exports.SansionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sansion_entity_1 = require("../entitites/sansion.entity");
const infraccion_service_1 = require("./infraccion.service");
let SansionService = class SansionService {
    constructor(sansionRepository, infraccionService) {
        this.sansionRepository = sansionRepository;
        this.infraccionService = infraccionService;
        this.logger = new common_1.Logger('SancionService');
    }
    async create(createSansionDto) {
        try {
            const { infraccion } = createSansionDto, res = __rest(createSansionDto, ["infraccion"]);
            const infraccionEntity = await this.infraccionService.findOne(infraccion);
            const sansionEntity = this.sansionRepository.create(Object.assign(Object.assign({}, res), { infraccion: infraccionEntity }));
            await this.sansionRepository.save(sansionEntity);
            return this.findOne(sansionEntity.id);
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async findAll(paginationDto) {
        try {
            const { limit, offset } = paginationDto;
            if (limit && offset)
                return await this.sansionRepository.find({ skip: offset, take: limit, order: { createdAt: 'DESC' } });
            if (limit)
                return await this.sansionRepository.find({ take: limit, order: { createdAt: 'DESC' } });
            return await this.sansionRepository.find({ order: { createdAt: 'DESC' } });
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async findOne(id) {
        try {
            const sansion = await this.sansionRepository.findOne({ where: { id } });
            if (!sansion)
                throw new common_1.BadRequestException(`El estadio con id: ${id} no existe`);
            return sansion;
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async update(id, updateSansionDto) {
        try {
            const { infraccion } = updateSansionDto, res = __rest(updateSansionDto, ["infraccion"]);
            const sansion = await this.findOne(id);
            const sansionUpdated = await this.sansionRepository.update(sansion.id, Object.assign({}, res));
            if (sansionUpdated.affected === 0)
                throw new common_1.BadRequestException('No se ha actualizado ningún registro');
            return this.findOne(id);
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async remove(id) {
        try {
            const sansion = await this.findOne(id);
            const sansionDeleted = await this.sansionRepository.delete(sansion.id);
            if (sansionDeleted.affected === 0)
                throw new common_1.BadRequestException('No se ha eliminado ningún registro');
            return sansion;
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
SansionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sansion_entity_1.SansionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        infraccion_service_1.InfraccionService])
], SansionService);
exports.SansionService = SansionService;
//# sourceMappingURL=sansion.service.js.map