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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alerta = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/entities/base.entity");
const imagene_entity_1 = require("./imagene.entity");
const infractor_alerta_entity_1 = require("./infractor_alerta.entity");
let Alerta = class Alerta extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Alerta.prototype, "motivo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Alerta.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Alerta.prototype, "hora", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => imagene_entity_1.Imagene, imagene => imagene.alerta),
    __metadata("design:type", Array)
], Alerta.prototype, "imagenes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => infractor_alerta_entity_1.InfractorAlertaEntity, infractorAlerta => infractorAlerta.alerta),
    __metadata("design:type", Array)
], Alerta.prototype, "infractores", void 0);
Alerta = __decorate([
    (0, typeorm_1.Entity)({ name: 'alerta' })
], Alerta);
exports.Alerta = Alerta;
//# sourceMappingURL=alerta.entity.js.map