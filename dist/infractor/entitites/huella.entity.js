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
exports.HuellaEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/entities/base.entity");
const constants_1 = require("../../constants");
const infractor_entity_1 = require("./infractor.entity");
let HuellaEntity = class HuellaEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ name: 'tipo_huella', type: 'enum', enum: constants_1.HUELLAS }),
    __metadata("design:type", String)
], HuellaEntity.prototype, "tipoHuella", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HuellaEntity.prototype, "huella", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => infractor_entity_1.InfractorEntity, infractor => infractor.huellas, { onDelete: 'CASCADE' }),
    __metadata("design:type", infractor_entity_1.InfractorEntity)
], HuellaEntity.prototype, "infractor", void 0);
HuellaEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'huella' })
], HuellaEntity);
exports.HuellaEntity = HuellaEntity;
//# sourceMappingURL=huella.entity.js.map