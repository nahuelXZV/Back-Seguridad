"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertasModule = void 0;
const common_1 = require("@nestjs/common");
const alerta_service_1 = require("./services/alerta.service");
const imagenes_service_1 = require("./services/imagenes.service");
const imagenes_controller_1 = require("./controllers/imagenes.controller");
const alerta_controller_1 = require("./controllers/alerta.controller");
const typeorm_1 = require("@nestjs/typeorm");
const infractor_alerta_entity_1 = require("./entities/infractor_alerta.entity");
const alerta_entity_1 = require("./entities/alerta.entity");
const imagene_entity_1 = require("./entities/imagene.entity");
const infractor_module_1 = require("../infractor/infractor.module");
let AlertasModule = class AlertasModule {
};
AlertasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                alerta_entity_1.Alerta,
                imagene_entity_1.Imagene,
                infractor_alerta_entity_1.InfractorAlertaEntity,
            ]),
            infractor_module_1.InfractorModule
        ],
        providers: [alerta_service_1.AlertaService, imagenes_service_1.ImagenesService],
        controllers: [alerta_controller_1.AlertaController, imagenes_controller_1.ImagenesController],
        exports: [alerta_service_1.AlertaService, imagenes_service_1.ImagenesService]
    })
], AlertasModule);
exports.AlertasModule = AlertasModule;
//# sourceMappingURL=alertas.module.js.map