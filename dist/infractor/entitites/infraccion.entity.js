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
exports.InfraccionEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/entities/base.entity");
const infractor_entity_1 = require("./infractor.entity");
const estadio_entity_1 = require("./estadio.entity");
const testigo_entity_1 = require("./testigo.entity");
const users_entity_1 = require("../../users/entities/users.entity");
const documento_entity_1 = require("./documento.entity");
const sansion_entity_1 = require("./sansion.entity");
let InfraccionEntity = class InfraccionEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InfraccionEntity.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InfraccionEntity.prototype, "hora", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InfraccionEntity.prototype, "seccion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InfraccionEntity.prototype, "fila", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InfraccionEntity.prototype, "asiento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], InfraccionEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'pendiente' }),
    __metadata("design:type", String)
], InfraccionEntity.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => sansion_entity_1.SansionEntity, sansion => sansion.infraccion),
    __metadata("design:type", sansion_entity_1.SansionEntity)
], InfraccionEntity.prototype, "sansion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => infractor_entity_1.InfractorEntity, infractor => infractor.infracciones, { onDelete: 'CASCADE' }),
    __metadata("design:type", infractor_entity_1.InfractorEntity)
], InfraccionEntity.prototype, "infractor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estadio_entity_1.EstadioEntity, estadio => estadio.infracciones, { onDelete: 'CASCADE' }),
    __metadata("design:type", estadio_entity_1.EstadioEntity)
], InfraccionEntity.prototype, "estadio", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UsersEntity, user => user.infracciones, { onDelete: 'CASCADE' }),
    __metadata("design:type", users_entity_1.UsersEntity)
], InfraccionEntity.prototype, "creador", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => testigo_entity_1.TestigoEntity, testigo => testigo.infraccion),
    __metadata("design:type", Array)
], InfraccionEntity.prototype, "testigos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => documento_entity_1.DocumentoEntity, documento => documento.infraccion),
    __metadata("design:type", Array)
], InfraccionEntity.prototype, "documentos", void 0);
InfraccionEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'infraccion' })
], InfraccionEntity);
exports.InfraccionEntity = InfraccionEntity;
//# sourceMappingURL=infraccion.entity.js.map