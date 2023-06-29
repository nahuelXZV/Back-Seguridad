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
exports.CreateEstadioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateEstadioDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'bernabeu',
        type: String,
        description: 'Nombre del estadio'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEstadioDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'santa cruz',
        type: String,
        description: 'Nombre del departamento'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEstadioDto.prototype, "departamento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'santa cruz de la sierra',
        type: String,
        description: 'Nombre de la ciudad'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEstadioDto.prototype, "ciudad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Calle 1 # 123',
        type: String,
        description: 'Nombre de la calle'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEstadioDto.prototype, "direccion", void 0);
exports.CreateEstadioDto = CreateEstadioDto;
//# sourceMappingURL=create-estadio.dto.js.map