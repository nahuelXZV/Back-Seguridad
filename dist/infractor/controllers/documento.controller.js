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
exports.DocumentoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const documento_service_1 = require("../services/documento.service");
const platform_express_1 = require("@nestjs/platform-express");
const fileFilter_1 = require("../../files/helpers/fileFilter");
const images_dto_1 = require("../../files/dto/images.dto");
const create_documento_dto_1 = require("../dto/create-documento.dto");
let DocumentoController = class DocumentoController {
    constructor(documentoService) {
        this.documentoService = documentoService;
    }
    uploadFile(documentos, createDocumentoDto) {
        return this.documentoService.uploadFile(documentos, createDocumentoDto);
    }
    deleteFile(documento_id) {
        return this.documentoService.deleteFile(documento_id);
    }
};
__decorate([
    (0, swagger_1.ApiQuery)({ name: 'infraccion_id', type: 'uuid', required: true, description: 'Id de la infraccion' }),
    (0, swagger_1.ApiBody)({
        isArray: true,
        required: true,
        type: images_dto_1.ImageDto,
        description: 'Array con los documentos a subir',
        schema: {
            type: 'object',
            properties: {
                documentos: {
                    type: 'array',
                    items: {
                        type: 'string',
                        format: 'binary',
                    },
                },
            },
        },
    }),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('documentos', 10, {
        fileFilter: fileFilter_1.fileFilter,
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, create_documento_dto_1.CreateDocumentoDto]),
    __metadata("design:returntype", Promise)
], DocumentoController.prototype, "uploadFile", null);
__decorate([
    (0, swagger_1.ApiQuery)({ name: 'documento_id', type: 'uuid', required: true, description: 'Id del documento' }),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Query)('documento_id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocumentoController.prototype, "deleteFile", null);
DocumentoController = __decorate([
    (0, swagger_1.ApiTags)('Documentos'),
    (0, common_1.Controller)('documento'),
    __metadata("design:paramtypes", [documento_service_1.DocumentoService])
], DocumentoController);
exports.DocumentoController = DocumentoController;
//# sourceMappingURL=documento.controller.js.map