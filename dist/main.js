"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const constants_1 = require("./constants");
const morgan = require("morgan");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dist_1 = require("@nestjs/swagger/dist");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(morgan('dev'));
    app.setGlobalPrefix('api');
    app.enableCors(constants_1.CORS_OPTIONS);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transformOptions: {
            enableImplicitConversion: true,
        }
    }));
    const reflector = app.get('Reflector');
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(reflector));
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('PORT');
    const title = configService.get('APP_NAME');
    const url = configService.get('APP_URL');
    const config = new swagger_1.DocumentBuilder()
        .addBearerAuth()
        .setTitle(title)
        .setDescription('Api para el sistema de seguridad de la Federacion Boliviana de Futbol - FBF, Link de Postman: https://api.postman.com/collections/19549244-492455d0-a554-4c84-bd53-516323ae8769?access_key=PMAT-01GYDJ5ZHP2RB4ANM1PT4ERTP9')
        .setVersion('1.0')
        .build();
    const document = dist_1.SwaggerModule.createDocument(app, config);
    dist_1.SwaggerModule.setup('docs', app, document);
    await app.listen(port);
    console.log(`Application is running on: ${url}`);
}
bootstrap();
//# sourceMappingURL=main.js.map