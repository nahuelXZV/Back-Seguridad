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
exports.FotoEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/entities/base.entity");
const infractor_entity_1 = require("./infractor.entity");
let FotoEntity = class FotoEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FotoEntity.prototype, "dir", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FotoEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => infractor_entity_1.InfractorEntity, infractor => infractor.fotos, { onDelete: 'CASCADE' }),
    __metadata("design:type", infractor_entity_1.InfractorEntity)
], FotoEntity.prototype, "infractor", void 0);
FotoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'foto' })
], FotoEntity);
exports.FotoEntity = FotoEntity;
//# sourceMappingURL=foto.entity.js.map