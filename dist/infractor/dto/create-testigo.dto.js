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
exports.CreateTestigoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const constants_1 = require("../../constants");
class CreateTestigoDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Lucas',
        type: String,
        description: 'Nombre del testigo'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTestigoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Mendoza',
        type: String,
        description: 'Apellido del testigo'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTestigoDto.prototype, "apellido", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '+591 12345678',
        type: String,
        description: 'Telefono del testigo'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTestigoDto.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12345678',
        type: String,
        description: 'Cedula de identidad del testigo'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTestigoDto.prototype, "cedulaIdentidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'argentina',
        type: String,
        description: 'Nacionalidad del testigo'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTestigoDto.prototype, "nacionalidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'masculino',
        enum: constants_1.SEXO,
        description: 'Sexo del testigo'
    }),
    (0, class_validator_1.IsEnum)(constants_1.SEXO),
    __metadata("design:type", String)
], CreateTestigoDto.prototype, "sexo", void 0);
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
], CreateTestigoDto.prototype, "infraccion", void 0);
exports.CreateTestigoDto = CreateTestigoDto;
//# sourceMappingURL=create-testigo.dto.js.map