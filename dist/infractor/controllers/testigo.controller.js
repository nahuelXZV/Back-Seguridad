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
exports.TestigoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const testigo_service_1 = require("../services/testigo.service");
const dto_1 = require("../dto");
const decorators_1 = require("../../auth/decorators");
const pagination_dto_1 = require("../../common/dto/pagination.dto");
let TestigoController = class TestigoController {
    constructor(testigoService) {
        this.testigoService = testigoService;
    }
    create(createTestigoDto) {
        return this.testigoService.create(createTestigoDto);
    }
    findAll(paginationDto) {
        return this.testigoService.findAll(paginationDto);
    }
    findOne(id) {
        return this.testigoService.findOne(id);
    }
    update(id, updateTestigoDto) {
        return this.testigoService.update(id, updateTestigoDto);
    }
    remove(id) {
        return this.testigoService.remove(id);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, decorators_1.RolesAccess)('ADMINISTRADOR'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateTestigoDto]),
    __metadata("design:returntype", void 0)
], TestigoController.prototype, "create", null);
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
], TestigoController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'string' }),
    (0, decorators_1.RolesAccess)('ADMINISTRADOR'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestigoController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'string' }),
    (0, decorators_1.RolesAccess)('ADMINISTRADOR'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateTestigoDto]),
    __metadata("design:returntype", void 0)
], TestigoController.prototype, "update", null);
__decorate([
    (0, decorators_1.RolesAccess)('ADMINISTRADOR'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'string' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestigoController.prototype, "remove", null);
TestigoController = __decorate([
    (0, swagger_1.ApiTags)('Testigo'),
    (0, common_1.Controller)('testigo'),
    __metadata("design:paramtypes", [testigo_service_1.TestigoService])
], TestigoController);
exports.TestigoController = TestigoController;
//# sourceMappingURL=testigo.controller.js.map