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
exports.ReconocimientoTribunaService = void 0;
const common_1 = require("@nestjs/common");
const alerta_service_1 = require("../../alertas/services/alerta.service");
const imagenes_service_1 = require("../../alertas/services/imagenes.service");
const recoknition_service_1 = require("../../providers/recoknition/recoknition.service");
let ReconocimientoTribunaService = class ReconocimientoTribunaService {
    constructor(recoknitionService, alertaService, imagenService) {
        this.recoknitionService = recoknitionService;
        this.alertaService = alertaService;
        this.imagenService = imagenService;
        this.logger = new common_1.Logger('ReconocimientoTribunaService');
    }
    async reconocimientoTribuna(foto, data) {
        try {
            const infractores = await this.reconocimientoFacial(foto);
            console.log(infractores);
            const alerta = await this.alertaService.create(Object.assign(Object.assign({}, data), { infractores: infractores }));
            if (!alerta)
                return undefined;
            const imagen = await this.imagenService.create(foto, alerta.id);
            if (!imagen)
                return undefined;
            return this.alertaService.findOne(alerta.id);
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async reconocimientoFacial(foto) {
        try {
            const fotos = await this.recoknitionService.searchEventosUsuariosFaces(foto);
            const usuariosId = this.getUsers(fotos);
            console.log(usuariosId);
            if (usuariosId.length === 0)
                return [];
            return usuariosId;
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    extraerUUID(cadena) {
        const regex = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}/i;
        const match = cadena.match(regex);
        if (match) {
            return match[0];
        }
        else {
            return null;
        }
    }
    eliminarDuplicados(array) {
        return [...new Set(array)];
    }
    getUsers(fotos) {
        const users = [];
        fotos.forEach((foto) => {
            const user = this.extraerUUID(foto);
            if (user)
                users.push(user);
        });
        return this.eliminarDuplicados(users);
    }
    handlerError(error) {
        this.logger.error(error.message);
        if (error.code === '23505')
            throw new common_1.BadRequestException(error.detail);
        throw new common_1.InternalServerErrorException(error.message);
    }
};
ReconocimientoTribunaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [recoknition_service_1.RecoknitionService,
        alerta_service_1.AlertaService,
        imagenes_service_1.ImagenesService])
], ReconocimientoTribunaService);
exports.ReconocimientoTribunaService = ReconocimientoTribunaService;
//# sourceMappingURL=reconocimiento-tribuna.service.js.map