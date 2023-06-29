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
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const constants_1 = require("../../constants");
const users_service_1 = require("../../users/services/users.service");
const use_toke_1 = require("../../utils/use.toke");
let AuthGuard = class AuthGuard {
    constructor(userService, reflector) {
        this.userService = userService;
        this.reflector = reflector;
    }
    async canActivate(context) {
        var _a;
        try {
            const isPublic = this.reflector.get(constants_1.PUBLIC_KEY, context.getHandler());
            if (isPublic)
                return true;
            const request = context.switchToHttp().getRequest();
            const token = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
            if (!token || Array.isArray(token))
                throw new common_1.UnauthorizedException('Token no encontrado');
            const managerToken = (0, use_toke_1.useToken)(token);
            if (typeof managerToken === 'string')
                throw new common_1.UnauthorizedException(managerToken);
            if (managerToken.isExpired)
                throw new common_1.UnauthorizedException('Token expirado');
            const user = await this.userService.findOneAuth(managerToken.sub);
            request.idUser = user.id;
            request.roleUser = user.role;
            return true;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error al validar el token');
        }
    }
};
AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        core_1.Reflector])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map