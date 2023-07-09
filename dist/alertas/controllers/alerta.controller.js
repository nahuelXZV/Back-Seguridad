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
exports.AlertaController = void 0;
const common_1 = require("@nestjs/common");
const create_alerta_dto_1 = require("../dto/create-alerta.dto");
const update_alerta_dto_1 = require("../dto/update-alerta.dto");
const alerta_service_1 = require("../services/alerta.service");
let AlertaController = class AlertaController {
    constructor(alertaService) {
        this.alertaService = alertaService;
    }
    create(createAlertaDto) {
        return this.alertaService.create(createAlertaDto);
    }
    findAll() {
        return this.alertaService.findAll();
    }
    findOne(id) {
        return this.alertaService.findOne(id);
    }
    update(id, updateAlertaDto) {
        return this.alertaService.update(id, updateAlertaDto);
    }
    remove(id) {
        return this.alertaService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_alerta_dto_1.CreateAlertaDto]),
    __metadata("design:returntype", void 0)
], AlertaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AlertaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AlertaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_alerta_dto_1.UpdateAlertaDto]),
    __metadata("design:returntype", void 0)
], AlertaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AlertaController.prototype, "remove", null);
AlertaController = __decorate([
    (0, common_1.Controller)('alerta'),
    __metadata("design:paramtypes", [alerta_service_1.AlertaService])
], AlertaController);
exports.AlertaController = AlertaController;
//# sourceMappingURL=alerta.controller.js.map