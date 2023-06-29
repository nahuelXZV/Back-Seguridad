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
exports.CreateInfraccionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateInfraccionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '10/10/2023',
        type: String,
        description: 'Fecha de la infraccion'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInfraccionDto.prototype, "fecha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '10:00',
        type: String,
        description: 'Hora de la infraccion'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInfraccionDto.prototype, "hora", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'seccion 1',
        type: String,
        description: 'Seccion en el estadio de la infraccion'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInfraccionDto.prototype, "seccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'fila 1',
        type: String,
        description: 'Fila en el estadio de la infraccion'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInfraccionDto.prototype, "fila", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'asiento 1',
        type: String,
        description: 'Asiento en el estadio de la infraccion'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInfraccionDto.prototype, "asiento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'El infractor se encontraba en estado de ebriedad',
        type: String,
        description: 'Descripcion de la infraccion'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInfraccionDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'En proceso',
        type: String,
        description: 'Estado de la infraccion'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInfraccionDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ' ',
        type: String,
        description: 'Id del infractor'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateInfraccionDto.prototype, "infractor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ' ',
        type: String,
        description: 'Id del usuario creador de la infraccion'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateInfraccionDto.prototype, "creador", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ' ',
        type: String,
        description: 'Id del estadio de la infraccion'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateInfraccionDto.prototype, "estadio", void 0);
exports.CreateInfraccionDto = CreateInfraccionDto;
//# sourceMappingURL=create-infraccion.dto.js.map