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
exports.InfractorEntity = void 0;
const typeorm_1 = require("typeorm");
const Column_1 = require("typeorm/decorator/columns/Column");
const base_entity_1 = require("../../common/entities/base.entity");
const constants_1 = require("../../constants");
const huella_entity_1 = require("./huella.entity");
const foto_entity_1 = require("./foto.entity");
const infraccion_entity_1 = require("./infraccion.entity");
let InfractorEntity = class InfractorEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, Column_1.Column)(),
    __metadata("design:type", String)
], InfractorEntity.prototype, "nombre", void 0);
__decorate([
    (0, Column_1.Column)(),
    __metadata("design:type", String)
], InfractorEntity.prototype, "apellido", void 0);
__decorate([
    (0, Column_1.Column)({ unique: true, name: 'cedula_identidad' }),
    __metadata("design:type", String)
], InfractorEntity.prototype, "cedulaIdentidad", void 0);
__decorate([
    (0, Column_1.Column)(),
    __metadata("design:type", String)
], InfractorEntity.prototype, "nacionalidad", void 0);
__decorate([
    (0, Column_1.Column)({ name: 'fecha_nacimiento' }),
    __metadata("design:type", String)
], InfractorEntity.prototype, "fechaNacimiento", void 0);
__decorate([
    (0, Column_1.Column)({ type: 'enum', enum: constants_1.SEXO }),
    __metadata("design:type", String)
], InfractorEntity.prototype, "sexo", void 0);
__decorate([
    (0, Column_1.Column)(),
    __metadata("design:type", String)
], InfractorEntity.prototype, "otros", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => huella_entity_1.HuellaEntity, huella => huella.infractor),
    __metadata("design:type", Array)
], InfractorEntity.prototype, "huellas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => foto_entity_1.FotoEntity, foto => foto.infractor),
    __metadata("design:type", Array)
], InfractorEntity.prototype, "fotos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => infraccion_entity_1.InfraccionEntity, infraccion => infraccion.infractor),
    __metadata("design:type", Array)
], InfractorEntity.prototype, "infracciones", void 0);
InfractorEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'infractor' })
], InfractorEntity);
exports.InfractorEntity = InfractorEntity;
//# sourceMappingURL=infractor.entity.js.map