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
exports.CreateInfractorDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const constants_1 = require("../../constants");
const create_huella_dto_1 = require("./create-huella.dto");
class CreateInfractorDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'John',
        type: String,
        description: 'Nombre del infractor'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInfractorDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Doe',
        type: String,
        description: 'Apellido del infractor'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInfractorDto.prototype, "apellido", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12345678',
        type: String,
        description: 'Cédula de identidad del infractor'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInfractorDto.prototype, "cedulaIdentidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Venezolano',
        type: String,
        description: 'Nacionalidad del infractor'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInfractorDto.prototype, "nacionalidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1990-01-01',
        type: Date,
        description: 'Fecha de nacimiento del infractor'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInfractorDto.prototype, "fechaNacimiento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'masculino',
        enum: constants_1.SEXO,
        description: 'Sexo del infractor'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_1.SEXO),
    __metadata("design:type", String)
], CreateInfractorDto.prototype, "sexo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Ninguno',
        type: String,
        description: 'Otros datos del infractor'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInfractorDto.prototype, "otros", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [{
                tipoHuella: 'indice_derecho',
                huella: '12345678'
            }],
        type: [create_huella_dto_1.CreateHuellaDto],
        description: 'Tipo de huella'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateInfractorDto.prototype, "huellas", void 0);
exports.CreateInfractorDto = CreateInfractorDto;
//# sourceMappingURL=create-infractor.dto.js.map