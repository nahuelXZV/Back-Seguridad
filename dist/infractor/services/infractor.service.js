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
exports.InfractorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const foto_entity_1 = require("../entitites/foto.entity");
const huella_entity_1 = require("../entitites/huella.entity");
const infractor_entity_1 = require("../entitites/infractor.entity");
let InfractorService = class InfractorService {
    constructor(infractorRepository, fotoRepository, huellaRepository) {
        this.infractorRepository = infractorRepository;
        this.fotoRepository = fotoRepository;
        this.huellaRepository = huellaRepository;
        this.logger = new common_1.Logger('InfractorService');
        this.relations = ['fotos', 'huellas', 'infracciones', 'infracciones.estadio'];
    }
    async findAll(pagination) {
        try {
            const { limit, offset } = pagination;
            if (limit && offset)
                return await this.infractorRepository.find({ relations: this.relations, take: limit, skip: offset, order: { createdAt: 'DESC' } });
            if (limit)
                return await this.infractorRepository.find({ relations: this.relations, take: limit, order: { createdAt: 'DESC' } });
            return await this.infractorRepository.find({ relations: this.relations, order: { createdAt: 'DESC' } });
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async create(createInfractorDto) {
        try {
            const { huellas } = createInfractorDto, res = __rest(createInfractorDto, ["huellas"]);
            const infractor = await this.infractorRepository.save(res, { reload: true });
            if (!infractor)
                throw new common_1.BadRequestException('No se pudo crear el infractor.');
            huellas.forEach(async (huella) => {
                huella.huella = this.encryptHuella(huella.huella);
                await this.huellaRepository.save(Object.assign(Object.assign({}, huella), { infractor: infractor }));
            });
            return this.findOne(infractor.id);
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async findOne(id) {
        try {
            const infractor = await this.infractorRepository.findOne({ where: { id }, relations: this.relations });
            if (!infractor)
                throw new common_1.NotFoundException('Infractor no encontrado.');
            return infractor;
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async update(id, updateInfractorDto) {
        try {
            let { huellas } = updateInfractorDto, data = __rest(updateInfractorDto, ["huellas"]);
            const infractor = await this.findOne(id);
            const infractorUpdated = await this.infractorRepository.update(infractor.id, data);
            if (infractorUpdated.affected === 0)
                throw new common_1.BadRequestException('Infractor no actualizado.');
            if (!huellas)
                return this.findOne(id);
            await this.huellaRepository.delete({ infractor: { id } });
            huellas.forEach(async (huella) => {
                huella.huella = this.encryptHuella(huella.huella);
                await this.huellaRepository.save(Object.assign(Object.assign({}, huella), { infractor: { id } }));
            });
            return this.findOne(id);
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async delete(id) {
        try {
            const infractor = await this.findOne(id);
            const infractorDeleted = await this.infractorRepository.delete(infractor.id);
            if (infractorDeleted.affected === 0)
                throw new common_1.BadRequestException('Infractor no eliminado.');
            return { message: "Infractor eliminado correctamente" };
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async uploadFile(files, id) {
        try {
            const infractor = await this.findOne(id);
            files.forEach(async (file) => {
                const foto = new foto_entity_1.FotoEntity();
                foto.dir = file.dir;
                foto.infractor = infractor;
                foto.nombre = file.name;
                const fotoCreated = await this.fotoRepository.save(foto);
                if (!fotoCreated)
                    throw new common_1.BadRequestException('No se pudo crear la foto.');
            });
            return { message: 'Fotos subidas correctamente' };
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    encryptHuella(huellas) {
        return bcrypt.hashSync(huellas, +process.env.HASH_SALT);
    }
    handlerError(error) {
        this.logger.error(error.message);
        if (error.code === '23505')
            throw new common_1.BadRequestException(error.detail);
        throw new common_1.InternalServerErrorException(error.message);
    }
};
InfractorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(infractor_entity_1.InfractorEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(foto_entity_1.FotoEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(huella_entity_1.HuellaEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], InfractorService);
exports.InfractorService = InfractorService;
//# sourceMappingURL=infractor.service.js.map