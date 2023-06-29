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
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const constants_1 = require("../../constants");
let RolesGuard = class RolesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        try {
            const isPublic = this.reflector.get(constants_1.PUBLIC_KEY, context.getHandler());
            if (isPublic)
                return true;
            const roles = this.reflector.get(constants_1.ROLES_KEY, context.getHandler());
            const admin = this.reflector.get(constants_1.ADMIN_KEY, context.getHandler());
            const request = context.switchToHttp().getRequest();
            const { roleUser } = request;
            if (roles === undefined) {
                if (!admin)
                    return true;
                if (admin && roleUser === constants_1.ROLES.ADMINISTRADOR)
                    return true;
                throw new common_1.UnauthorizedException('No tienes permisos para acceder a esta ruta.');
            }
            if (roleUser === constants_1.ROLES.ADMINISTRADOR)
                return true;
            const isAuthorized = roles.some((role) => roleUser === role);
            if (!isAuthorized)
                throw new common_1.UnauthorizedException('No tienes permisos para acceder a esta ruta.');
            return true;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error al validar los permisos');
        }
    }
};
RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], RolesGuard);
exports.RolesGuard = RolesGuard;
//# sourceMappingURL=roles.guard.js.map