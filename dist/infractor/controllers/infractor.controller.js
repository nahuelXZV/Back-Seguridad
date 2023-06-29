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
exports.InfractorController = void 0;
const common_1 = require("@nestjs/common");
const dist_1 = require("@nestjs/swagger/dist");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const infractor_service_1 = require("../services/infractor.service");
const pagination_dto_1 = require("../../common/dto/pagination.dto");
const dto_1 = require("../dto");
const decorators_1 = require("../../auth/decorators");
let InfractorController = class InfractorController {
    constructor(infractorService) {
        this.infractorService = infractorService;
    }
    async create(createInfractorDto) {
        return await this.infractorService.create(createInfractorDto);
    }
    async findAll(paginationDto) {
        return await this.infractorService.findAll(paginationDto);
    }
    async findOne(id) {
        return await this.infractorService.findOne(id);
    }
    async update(id, updateInfractorDto) {
        return await this.infractorService.update(id, updateInfractorDto);
    }
    async delete(id) {
        return this.infractorService.delete(id);
    }
};
__decorate([
    (0, decorators_1.PublicAccess)(),
    (0, dist_1.ApiBearerAuth)(),
    (0, roles_decorator_1.RolesAccess)('ADMINISTRADOR'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateInfractorDto]),
    __metadata("design:returntype", Promise)
], InfractorController.prototype, "create", null);
__decorate([
    (0, dist_1.ApiBearerAuth)(),
    (0, dist_1.ApiQuery)({ name: 'limit', type: 'number', required: false }),
    (0, dist_1.ApiQuery)({ name: 'offset', type: 'number', required: false }),
    (0, roles_decorator_1.RolesAccess)('ADMINISTRADOR'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], InfractorController.prototype, "findAll", null);
__decorate([
    (0, dist_1.ApiBearerAuth)(),
    (0, dist_1.ApiParam)({ name: 'id', type: 'string' }),
    (0, roles_decorator_1.RolesAccess)('ADMINISTRADOR'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InfractorController.prototype, "findOne", null);
__decorate([
    (0, dist_1.ApiBearerAuth)(),
    (0, dist_1.ApiParam)({ name: 'id', type: 'string' }),
    (0, roles_decorator_1.RolesAccess)('ADMINISTRADOR'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateInfractorDto]),
    __metadata("design:returntype", Promise)
], InfractorController.prototype, "update", null);
__decorate([
    (0, roles_decorator_1.RolesAccess)('ADMINISTRADOR'),
    (0, dist_1.ApiBearerAuth)(),
    (0, dist_1.ApiParam)({ name: 'id', type: 'string' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InfractorController.prototype, "delete", null);
InfractorController = __decorate([
    (0, dist_1.ApiTags)('Infractores'),
    (0, common_1.Controller)('infractor'),
    __metadata("design:paramtypes", [infractor_service_1.InfractorService])
], InfractorController);
exports.InfractorController = InfractorController;
//# sourceMappingURL=infractor.controller.js.map