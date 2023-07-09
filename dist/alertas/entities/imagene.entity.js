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
exports.Imagene = void 0;
const base_entity_1 = require("../../common/entities/base.entity");
const typeorm_1 = require("typeorm");
const alerta_entity_1 = require("./alerta.entity");
let Imagene = class Imagene extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Imagene.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Imagene.prototype, "dir", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Imagene.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => alerta_entity_1.Alerta, alerta => alerta.imagenes),
    __metadata("design:type", alerta_entity_1.Alerta)
], Imagene.prototype, "alerta", void 0);
Imagene = __decorate([
    (0, typeorm_1.Entity)('imagenes')
], Imagene);
exports.Imagene = Imagene;
//# sourceMappingURL=imagene.entity.js.map