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
exports.TestigoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const testigo_entity_1 = require("../entitites/testigo.entity");
const typeorm_2 = require("typeorm");
const infraccion_service_1 = require("./infraccion.service");
let TestigoService = class TestigoService {
    constructor(testigoRepository, infraccionService) {
        this.testigoRepository = testigoRepository;
        this.infraccionService = infraccionService;
        this.logger = new common_1.Logger('TestigoService');
    }
    async create(createTestigoDto) {
        try {
            const { infraccion } = createTestigoDto, res = __rest(createTestigoDto, ["infraccion"]);
            const infraccionEntity = await this.infraccionService.findOne(infraccion);
            const testigoEntity = this.testigoRepository.create(Object.assign(Object.assign({}, res), { infraccion: infraccionEntity }));
            await this.testigoRepository.save(testigoEntity);
            return this.findOne(testigoEntity.id);
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async findAll(paginationDto) {
        try {
            const { limit, offset } = paginationDto;
            if (limit && offset)
                return await this.testigoRepository.find({ skip: offset, take: limit, order: { createdAt: 'DESC' } });
            if (limit)
                return await this.testigoRepository.find({ take: limit, order: { createdAt: 'DESC' } });
            return await this.testigoRepository.find({ order: { createdAt: 'DESC' } });
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async findOne(id) {
        try {
            const testigoEntity = await this.testigoRepository.findOne({ where: { id } });
            if (!testigoEntity)
                throw new common_1.BadRequestException(`El testigo con id ${id} no existe`);
            return testigoEntity;
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async update(id, updateTestigoDto) {
        try {
            const { infraccion } = updateTestigoDto, res = __rest(updateTestigoDto, ["infraccion"]);
            const testigoEntity = await this.findOne(id);
            const testigoUpdated = await this.testigoRepository.update(testigoEntity.id, Object.assign({}, res));
            if (testigoUpdated.affected === 0)
                throw new common_1.BadRequestException(`El testigo con id ${id} no existe`);
            return this.findOne(id);
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async remove(id) {
        try {
            const testigoEntity = await this.findOne(id);
            const testigoDeleted = await this.testigoRepository.delete(testigoEntity.id);
            if (testigoDeleted.affected === 0)
                throw new common_1.BadRequestException(`El testigo con id ${id} no existe`);
            return testigoEntity;
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
TestigoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(testigo_entity_1.TestigoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        infraccion_service_1.InfraccionService])
], TestigoService);
exports.TestigoService = TestigoService;
//# sourceMappingURL=testigo.service.js.map