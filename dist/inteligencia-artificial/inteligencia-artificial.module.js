"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteligenciaArtificialModule = void 0;
const common_1 = require("@nestjs/common");
const reconocimiento_tribuna_controller_1 = require("./controllers/reconocimiento-tribuna.controller");
const reconocimiento_tribuna_service_1 = require("./services/reconocimiento-tribuna.service");
const reconocimiento_facial_controller_1 = require("./controllers/reconocimiento-facial.controller");
const reconocimiento_facial_service_1 = require("./services/reconocimiento-facial.service");
const providers_module_1 = require("../providers/providers.module");
const infractor_module_1 = require("../infractor/infractor.module");
const alertas_module_1 = require("../alertas/alertas.module");
let InteligenciaArtificialModule = class InteligenciaArtificialModule {
};
InteligenciaArtificialModule = __decorate([
    (0, common_1.Module)({
        imports: [providers_module_1.ProvidersModule, infractor_module_1.InfractorModule, alertas_module_1.AlertasModule],
        controllers: [reconocimiento_facial_controller_1.ReconocimientoFacialController, reconocimiento_tribuna_controller_1.ReconocimientoTribunaController],
        providers: [reconocimiento_facial_service_1.ReconocimientoFacialService, reconocimiento_tribuna_service_1.ReconocimientoTribunaService]
    })
], InteligenciaArtificialModule);
exports.InteligenciaArtificialModule = InteligenciaArtificialModule;
//# sourceMappingURL=inteligencia-artificial.module.js.map