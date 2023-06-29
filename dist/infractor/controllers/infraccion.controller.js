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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfraccionController = void 0;
const common_1 = require("@nestjs/common");
const infraccion_service_1 = require("../services/infraccion.service");
const swagger_1 = require("@nestjs/swagger");
const decorators_1 = require("../../auth/decorators");
const dto_1 = require("../dto");
const pagination_dto_1 = require("../../common/dto/pagination.dto");
let InfraccionController = class InfraccionController {
    constructor(infraccionService) {
        this.infraccionService = infraccionService;
    }
    create(createInfraccionDto) {
        return this.infraccionService.create(createInfraccionDto);
    }
    findAll(paginationDto) {
        return this.infraccionService.findAll(paginationDto);
    }
    findOne(id) {
        return this.infraccionService.findOne(id);
    }
    update(id, updateInfraccionDto) {
        return this.infraccionService.update(id, updateInfraccionDto);
    }
    remove(id) {
        return this.infraccionService.remove(id);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, decorators_1.RolesAccess)('ADMINISTRADOR'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateInfraccionDto]),
    __metadata("design:returntype", void 0)
], InfraccionController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiQuery)({ name: 'limit', type: 'number', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'offset', type: 'number', required: false }),
    (0, decorators_1.RolesAccess)('ADMINISTRADOR'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], InfraccionController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'string' }),
    (0, decorators_1.RolesAccess)('ADMINISTRADOR'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InfraccionController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'string' }),
    (0, decorators_1.RolesAccess)('ADMINISTRADOR'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateInfraccionDto]),
    __metadata("design:returntype", void 0)
], InfraccionController.prototype, "update", null);
__decorate([
    (0, decorators_1.RolesAccess)('ADMINISTRADOR'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'string' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InfraccionController.prototype, "remove", null);
InfraccionController = __decorate([
    (0, swagger_1.ApiTags)('Infraccion'),
    (0, common_1.Controller)('infraccion'),
    __metadata("design:paramtypes", [infraccion_service_1.InfraccionService])
], InfraccionController);
exports.InfraccionController = InfraccionController;
//# sourceMappingURL=infraccion.controller.js.map