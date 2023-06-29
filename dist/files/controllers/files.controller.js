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
exports.FilesController = void 0;
const common_1 = require("@nestjs/common");
const files_service_1 = require("../services/files.service");
const platform_express_1 = require("@nestjs/platform-express");
const fileFilter_1 = require("../helpers/fileFilter");
const swagger_1 = require("@nestjs/swagger");
const images_dto_1 = require("../dto/images.dto");
let FilesController = class FilesController {
    constructor(filesService) {
        this.filesService = filesService;
    }
    uploadFile(fotos, infractor_id) {
        return this.filesService.uploadFile(fotos, infractor_id);
    }
};
__decorate([
    (0, swagger_1.ApiQuery)({ name: 'infractor_id', type: 'uuid', required: true, description: 'Id del infractor' }),
    (0, swagger_1.ApiBody)({
        isArray: true,
        required: true,
        type: images_dto_1.ImageDto,
        description: 'Array con las imagenes a subir',
        schema: {
            type: 'object',
            properties: {
                fotos: {
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
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('fotos', 10, {
        fileFilter: fileFilter_1.fileFilter,
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Query)('infractor_id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "uploadFile", null);
FilesController = __decorate([
    (0, swagger_1.ApiTags)('Imagenes'),
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [files_service_1.FilesService])
], FilesController);
exports.FilesController = FilesController;
//# sourceMappingURL=files.controller.js.map