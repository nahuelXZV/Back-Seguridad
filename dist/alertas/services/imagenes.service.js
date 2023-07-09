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
exports.ImagenesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const imagene_entity_1 = require("../entities/imagene.entity");
const typeorm_2 = require("typeorm");
const s3_service_1 = require("../../providers/s3/s3.service");
const alerta_service_1 = require("./alerta.service");
let ImagenesService = class ImagenesService {
    constructor(imageneRepository, alertaService, s3Service) {
        this.imageneRepository = imageneRepository;
        this.alertaService = alertaService;
        this.s3Service = s3Service;
    }
    async create(foto, id) {
        try {
            const alerta = await this.alertaService.findOne(id);
            if (!alerta)
                throw new common_1.BadRequestException('Alerta no existe');
            const originalname = foto.originalname.split('.')[0];
            const fileName = `${originalname}_${id}`;
            const path = await this.s3Service.uploadFile(foto, "alertas/" + fileName);
            const fotoInfractor = new imagene_entity_1.Imagene();
            fotoInfractor.dir = path.Location;
            fotoInfractor.alerta = alerta;
            fotoInfractor.nombre = fileName;
            fotoInfractor.tipo = foto.mimetype;
            await this.imageneRepository.save(fotoInfractor);
            return { message: 'Fotos subidas correctamente' };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async findAll() {
        try {
            return await this.imageneRepository.find();
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async findOne(id) {
        try {
            const imagen = await this.imageneRepository.findOne({ where: { id } });
            if (!imagen)
                throw new common_1.BadRequestException('La imagen no existe');
            return imagen;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async remove(id) {
        try {
            const imagen = await this.findOne(id);
            if (!imagen)
                throw new common_1.BadRequestException('La imagen no existe');
            await this.imageneRepository.delete(id);
            return { message: 'Imagen eliminada correctamente' };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
};
ImagenesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(imagene_entity_1.Imagene)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        alerta_service_1.AlertaService,
        s3_service_1.S3Service])
], ImagenesService);
exports.ImagenesService = ImagenesService;
//# sourceMappingURL=imagenes.service.js.map