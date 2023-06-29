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
exports.DocumentoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const s3_service_1 = require("../../providers/s3/s3.service");
const documento_entity_1 = require("../entitites/documento.entity");
const typeorm_2 = require("typeorm");
const infraccion_service_1 = require("./infraccion.service");
let DocumentoService = class DocumentoService {
    constructor(s3Service, infraccionService, documentoRepository) {
        this.s3Service = s3Service;
        this.infraccionService = infraccionService;
        this.documentoRepository = documentoRepository;
    }
    async uploadFile(documentos, createDocumentoDto) {
        try {
            const { infraccion, descripcion } = createDocumentoDto;
            const infraccionDB = await this.infraccionService.findOne(infraccion);
            if (!infraccionDB)
                throw new common_1.BadRequestException("Infraccion no existe");
            await Promise.all(documentos.map(async (doc) => {
                console.log(doc);
                const originalname = doc.originalname.split('.')[0];
                const fileName = `${originalname}_${infraccionDB.id}`;
                const path = await this.s3Service.uploadFile(doc, "infracciones/documentos" + fileName);
                const documento = this.documentoRepository.create({
                    infraccion: infraccionDB,
                    dir: path.Location,
                    nombre: originalname,
                    descripcion: descripcion,
                    tipo: doc.mimetype,
                });
                await this.documentoRepository.save(documento);
            }));
            return { message: "Documentos subidos correctamente" };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async deleteFile(documento_id) {
        try {
            const documento = await this.documentoRepository.findOne({ where: { id: documento_id } });
            if (!documento)
                throw new common_1.BadRequestException("Documento no existe");
            await this.documentoRepository.delete(documento_id);
            return { message: "Documento eliminado correctamente" };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
};
DocumentoService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(documento_entity_1.DocumentoEntity)),
    __metadata("design:paramtypes", [s3_service_1.S3Service,
        infraccion_service_1.InfraccionService,
        typeorm_2.Repository])
], DocumentoService);
exports.DocumentoService = DocumentoService;
//# sourceMappingURL=documento.service.js.map