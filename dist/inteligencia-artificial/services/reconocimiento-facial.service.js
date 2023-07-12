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
exports.ReconocimientoFacialService = void 0;
const common_1 = require("@nestjs/common");
const infractor_service_1 = require("../../infractor/services/infractor.service");
const recoknition_service_1 = require("../../providers/recoknition/recoknition.service");
let ReconocimientoFacialService = class ReconocimientoFacialService {
    constructor(recoknitionService, infractorService) {
        this.recoknitionService = recoknitionService;
        this.infractorService = infractorService;
        this.logger = new common_1.Logger('ReconocimientoFacialService');
    }
    async reconocimientoFacial(foto) {
        try {
            const fotos = await this.recoknitionService.searchEventosUsuariosFaces(foto);
            const usuariosId = this.getUsers(fotos);
            if (!usuariosId.length)
                throw new common_1.BadRequestException('No se encontraron coincidencias');
            const infractor = await this.infractorService.findOne(usuariosId[0]);
            if (!infractor)
                throw new common_1.BadRequestException('No se encontraron coincidencias');
            return infractor;
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
ReconocimientoFacialService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [recoknition_service_1.RecoknitionService,
        infractor_service_1.InfractorService])
], ReconocimientoFacialService);
exports.ReconocimientoFacialService = ReconocimientoFacialService;
//# sourceMappingURL=reconocimiento-facial.service.js.map