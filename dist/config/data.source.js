"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDS = exports.DataSourceConfig = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const path_1 = require("path");
config_1.ConfigModule.forRoot({ envFilePath: ".env" });
const configService = new config_1.ConfigService();
exports.DataSourceConfig = {
    type: "postgres",
    host: configService.get("DB_HOST"),
    port: configService.get("DB_PORT"),
    username: configService.get("DB_USERNAME"),
    password: configService.get("DB_PASSWORD"),
    database: configService.get("DB_DATABASE"),
    entities: [(0, path_1.join)(__dirname, "/../**/**/*.entity{.ts,.js}")],
    migrations: [(0, path_1.join)(__dirname, "/../migrations/*{.ts,.js}")],
    synchronize: configService.get("APP_PROD") === "true" ? true : false,
    logging: false,
    migrationsRun: true,
    ssl: configService.get("APP_PROD") === "true" ? true : false,
    extra: { ssl: configService.get("APP_PROD") === "true" ? { rejectUnauthorized: false } : null },
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
};
exports.AppDS = new typeorm_1.DataSource(exports.DataSourceConfig);
//# sourceMappingURL=data.source.js.map