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
exports.SansionEntity = void 0;
const typeorm_1 = require("typeorm");
const Column_1 = require("typeorm/decorator/columns/Column");
const base_entity_1 = require("../../common/entities/base.entity");
const infraccion_entity_1 = require("./infraccion.entity");
let SansionEntity = class SansionEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, Column_1.Column)(),
    __metadata("design:type", String)
], SansionEntity.prototype, "nombre", void 0);
__decorate([
    (0, Column_1.Column)(),
    __metadata("design:type", String)
], SansionEntity.prototype, "tiempo", void 0);
__decorate([
    (0, Column_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], SansionEntity.prototype, "descripcion", void 0);
__decorate([
    (0, Column_1.Column)({ name: 'fecha_inicio' }),
    __metadata("design:type", String)
], SansionEntity.prototype, "fechaInicio", void 0);
__decorate([
    (0, Column_1.Column)(),
    __metadata("design:type", String)
], SansionEntity.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => infraccion_entity_1.InfraccionEntity, infraccion => infraccion.sansion, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", infraccion_entity_1.InfraccionEntity)
], SansionEntity.prototype, "infraccion", void 0);
SansionEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'sansion' })
], SansionEntity);
exports.SansionEntity = SansionEntity;
//# sourceMappingURL=sansion.entity.js.map