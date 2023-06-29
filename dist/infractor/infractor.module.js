"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfractorModule = void 0;
const common_1 = require("@nestjs/common");
const infractor_service_1 = require("./services/infractor.service");
const infractor_controller_1 = require("./controllers/infractor.controller");
const typeorm_1 = require("@nestjs/typeorm");
const infractor_entity_1 = require("./entitites/infractor.entity");
const foto_entity_1 = require("./entitites/foto.entity");
const huella_entity_1 = require("./entitites/huella.entity");
const infraccion_service_1 = require("./services/infraccion.service");
const estadio_service_1 = require("./services/estadio.service");
const sansion_service_1 = require("./services/sansion.service");
const sancion_controller_1 = require("./controllers/sancion.controller");
const estadio_controller_1 = require("./controllers/estadio.controller");
const infraccion_controller_1 = require("./controllers/infraccion.controller");
const infraccion_entity_1 = require("./entitites/infraccion.entity");
const documento_entity_1 = require("./entitites/documento.entity");
const estadio_entity_1 = require("./entitites/estadio.entity");
const sansion_entity_1 = require("./entitites/sansion.entity");
const testigo_entity_1 = require("./entitites/testigo.entity");
const testigo_controller_1 = require("./controllers/testigo.controller");
const documento_controller_1 = require("./controllers/documento.controller");
const testigo_service_1 = require("./services/testigo.service");
const documento_service_1 = require("./services/documento.service");
const providers_module_1 = require("../providers/providers.module");
let InfractorModule = class InfractorModule {
};
InfractorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([infractor_entity_1.InfractorEntity, foto_entity_1.FotoEntity, huella_entity_1.HuellaEntity, infraccion_entity_1.InfraccionEntity, documento_entity_1.DocumentoEntity, estadio_entity_1.EstadioEntity, sansion_entity_1.SansionEntity, testigo_entity_1.TestigoEntity]),
            providers_module_1.ProvidersModule
        ],
        providers: [infractor_service_1.InfractorService, infraccion_service_1.InfraccionService, estadio_service_1.EstadioService, sansion_service_1.SansionService, testigo_service_1.TestigoService, documento_service_1.DocumentoService],
        controllers: [infractor_controller_1.InfractorController, sancion_controller_1.SancionController, estadio_controller_1.EstadioController, infraccion_controller_1.InfraccionController, testigo_controller_1.TestigoController, documento_controller_1.DocumentoController],
        exports: [infractor_service_1.InfractorService, typeorm_1.TypeOrmModule]
    })
], InfractorModule);
exports.InfractorModule = InfractorModule;
//# sourceMappingURL=infractor.module.js.map