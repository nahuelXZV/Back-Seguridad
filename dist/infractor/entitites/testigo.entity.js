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
exports.TestigoEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/entities/base.entity");
const infraccion_entity_1 = require("./infraccion.entity");
let TestigoEntity = class TestigoEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TestigoEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TestigoEntity.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cedula_identidad' }),
    __metadata("design:type", String)
], TestigoEntity.prototype, "cedulaIdentidad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TestigoEntity.prototype, "nacionalidad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TestigoEntity.prototype, "sexo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TestigoEntity.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => infraccion_entity_1.InfraccionEntity, infraccion => infraccion.testigos, { onDelete: 'CASCADE' }),
    __metadata("design:type", infraccion_entity_1.InfraccionEntity)
], TestigoEntity.prototype, "infraccion", void 0);
TestigoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'testigo' })
], TestigoEntity);
exports.TestigoEntity = TestigoEntity;
//# sourceMappingURL=testigo.entity.js.map