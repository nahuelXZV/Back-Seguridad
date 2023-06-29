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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadioService = void 0;
const common_1 = require("@nestjs/common");
const estadio_entity_1 = require("../entitites/estadio.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let EstadioService = class EstadioService {
    constructor(estadioRepository) {
        this.estadioRepository = estadioRepository;
        this.logger = new common_1.Logger('EstadioService');
    }
    async create(createEstadioDto) {
        try {
            const estadio = this.estadioRepository.create(createEstadioDto);
            await this.estadioRepository.save(estadio);
            return this.findOne(estadio.id);
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async findAll(paginationDto) {
        try {
            const { limit, offset } = paginationDto;
            if (limit && offset)
                return await this.estadioRepository.find({ skip: offset, take: limit, order: { createdAt: 'DESC' } });
            if (limit)
                return await this.estadioRepository.find({ take: limit, order: { createdAt: 'DESC' } });
            return await this.estadioRepository.find({ order: { createdAt: 'DESC' } });
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async findOne(id) {
        try {
            const estadio = await this.estadioRepository.findOne({ where: { id } });
            if (!estadio)
                throw new common_1.BadRequestException(`El estadio con id: ${id} no existe`);
            return estadio;
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async update(id, updateEstadioDto) {
        try {
            const estadio = await this.findOne(id);
            await this.estadioRepository.update(estadio.id, Object.assign({}, updateEstadioDto));
            return this.findOne(id);
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async remove(id) {
        try {
            const estadio = await this.findOne(id);
            const estadioDeleted = await this.estadioRepository.delete(estadio.id);
            if (estadioDeleted.affected === 0)
                throw new common_1.BadRequestException(`El estadio con id: ${id} no se pudo eliminar`);
            return estadio;
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
EstadioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(estadio_entity_1.EstadioEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], EstadioService);
exports.EstadioService = EstadioService;
//# sourceMappingURL=estadio.service.js.map