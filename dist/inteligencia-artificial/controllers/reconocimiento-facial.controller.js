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
exports.ReconocimientoFacialController = void 0;
const common_1 = require("@nestjs/common");
const reconocimiento_facial_service_1 = require("../services/reconocimiento-facial.service");
const fileFilter_1 = require("../../files/helpers/fileFilter");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
let ReconocimientoFacialController = class ReconocimientoFacialController {
    constructor(reconocimientoFacialService) {
        this.reconocimientoFacialService = reconocimientoFacialService;
    }
    reconocimientoFacial(foto) {
        return this.reconocimientoFacialService.reconocimientoFacial(foto);
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        isArray: true,
        required: true,
        description: 'Foto para reconocimiento facial',
    }),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('foto', {
        fileFilter: fileFilter_1.fileFilter,
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReconocimientoFacialController.prototype, "reconocimientoFacial", null);
ReconocimientoFacialController = __decorate([
    (0, swagger_1.ApiTags)('Reconocimiento Facial'),
    (0, common_1.Controller)('reconocimiento-facial'),
    __metadata("design:paramtypes", [reconocimiento_facial_service_1.ReconocimientoFacialService])
], ReconocimientoFacialController);
exports.ReconocimientoFacialController = ReconocimientoFacialController;
//# sourceMappingURL=reconocimiento-facial.controller.js.map