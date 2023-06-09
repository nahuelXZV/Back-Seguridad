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
exports.ExampleService = void 0;
const common_1 = require("@nestjs/common");
let ExampleService = class ExampleService {
    constructor() {
        this.logger = new common_1.Logger('EstadioService');
    }
    async create(createEstadioDto) {
        try {
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async findAll(paginationDto) {
        try {
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async findOne(id) {
        try {
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async update(id, updateEstadioDto) {
        try {
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async remove(id) {
        try {
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    handlerError(error) {
        this.logger.error(error.message);
        if (error.code === '23505')
            throw new common_1.BadRequestException(error.detail);
        throw new common_1.InternalServerErrorException(error.message);
    }
};
ExampleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ExampleService);
exports.ExampleService = ExampleService;
//# sourceMappingURL=example.service.js.map