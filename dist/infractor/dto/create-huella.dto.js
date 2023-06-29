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
exports.CreateHuellaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const constants_1 = require("../../constants");
class CreateHuellaDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'huella_derecha',
        enum: constants_1.HUELLAS,
        description: 'Tipo de huella'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_1.HUELLAS),
    __metadata("design:type", String)
], CreateHuellaDto.prototype, "tipoHuella", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12345678',
        type: String,
        description: 'Huella del infractor'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHuellaDto.prototype, "huella", void 0);
exports.CreateHuellaDto = CreateHuellaDto;
//# sourceMappingURL=create-huella.dto.js.map