"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const global_decorator_1 = require("@nestjs/common/decorators/modules/global.decorator");
const http_service_1 = require("./http/http.service");
const recoknition_service_1 = require("./recoknition/recoknition.service");
const s3_service_1 = require("./s3/s3.service");
let ProvidersModule = class ProvidersModule {
};
ProvidersModule = __decorate([
    (0, global_decorator_1.Global)(),
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        providers: [http_service_1.HttpCustomService, recoknition_service_1.RecoknitionService, s3_service_1.S3Service],
        exports: [http_service_1.HttpCustomService, axios_1.HttpModule, recoknition_service_1.RecoknitionService, s3_service_1.S3Service],
    })
], ProvidersModule);
exports.ProvidersModule = ProvidersModule;
//# sourceMappingURL=providers.module.js.map