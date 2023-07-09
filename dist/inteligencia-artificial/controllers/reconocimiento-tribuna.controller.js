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
exports.ReconocimientoTribunaController = void 0;
const common_1 = require("@nestjs/common");
const reconocimiento_tribuna_service_1 = require("../services/reconocimiento-tribuna.service");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const fileFilter_1 = require("../../files/helpers/fileFilter");
const create_alerta_dto_1 = require("../../alertas/dto/create-alerta.dto");
let ReconocimientoTribunaController = class ReconocimientoTribunaController {
    constructor(reconocimientoTribunaService) {
        this.reconocimientoTribunaService = reconocimientoTribunaService;
    }
    reconocimientoTribuna(foto, data) {
        return this.reconocimientoTribunaService.reconocimientoTribuna(foto, data);
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        isArray: true,
        required: true,
        description: 'Foto para reconocimiento de la tribuna',
    }),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('foto', {
        fileFilter: fileFilter_1.fileFilter,
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_alerta_dto_1.CreateAlertaDto]),
    __metadata("design:returntype", void 0)
], ReconocimientoTribunaController.prototype, "reconocimientoTribuna", null);
ReconocimientoTribunaController = __decorate([
    (0, common_1.Controller)('reconocimiento-tribuna'),
    __metadata("design:paramtypes", [reconocimiento_tribuna_service_1.ReconocimientoTribunaService])
], ReconocimientoTribunaController);
exports.ReconocimientoTribunaController = ReconocimientoTribunaController;
//# sourceMappingURL=reconocimiento-tribuna.controller.js.map