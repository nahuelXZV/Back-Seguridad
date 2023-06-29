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
exports.CreateSansionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateSansionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Penalizacion',
        type: String,
        description: 'Nombre de la sansion'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSansionDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '8 meses',
        type: String,
        description: 'Tiempo de la sansion'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSansionDto.prototype, "tiempo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'activo',
        type: String,
        description: 'Estado de la sansion'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSansionDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '10/10/2023',
        type: String,
        description: 'Fecha de inicio de la sansion'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSansionDto.prototype, "fechaInicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Prohibido el ingreso al estadio',
        type: String,
        description: 'Descripcion de la sansion'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSansionDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ' ',
        type: String,
        description: 'Id de la infraccion'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSansionDto.prototype, "infraccion", void 0);
exports.CreateSansionDto = CreateSansionDto;
//# sourceMappingURL=create-sansion.dto.js.map