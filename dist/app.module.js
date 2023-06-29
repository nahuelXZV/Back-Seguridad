"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const data_source_1 = require("./config/data.source");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const infractor_module_1 = require("./infractor/infractor.module");
const providers_module_1 = require("./providers/providers.module");
const files_module_1 = require("./files/files.module");
const inteligencia_artificial_module_1 = require("./inteligencia-artificial/inteligencia-artificial.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
            typeorm_1.TypeOrmModule.forRoot(Object.assign({}, data_source_1.DataSourceConfig)),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            infractor_module_1.InfractorModule,
            providers_module_1.ProvidersModule,
            files_module_1.FilesModule,
            inteligencia_artificial_module_1.InteligenciaArtificialModule,
        ],
        controllers: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map