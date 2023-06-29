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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const exceptions_1 = require("@nestjs/common/exceptions");
const jwt = require("jsonwebtoken");
const users_service_1 = require("../../users/services/users.service");
const use_toke_1 = require("../../utils/use.toke");
let AuthService = class AuthService {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async validateUser(email, password) {
        try {
            const user = await this.usersService.findBy({ key: 'email', value: email });
            if (!user || !await bcrypt.compare(password, user.password))
                throw new exceptions_1.NotFoundException('Usuario o contraseña incorrectos');
            return this.generateJWT(user);
        }
        catch (error) {
            throw new exceptions_1.InternalServerErrorException('Error al validar el usuario.');
        }
    }
    singJWT({ payload, secret, expiresIn }) {
        return jwt.sign(payload, secret, { expiresIn });
    }
    async generateJWT(user) {
        const getUser = await this.usersService.findOne(user.id);
        const payload = {
            sub: getUser.id,
            role: getUser.role
        };
        const accessToken = this.singJWT({ payload, secret: process.env.JWT_AUTH, expiresIn: '7d' });
        return {
            accessToken,
            user: getUser
        };
    }
    async recoverPassword(email) {
        const user = await this.usersService.findBy({ key: 'email', value: email });
        const payload = {
            sub: user.id,
            role: user.role
        };
        const accessToken = this.singJWT({ payload, secret: process.env.JWT_RECOVERY, expiresIn: '1h' });
        return {
            accessToken
        };
    }
    async checkToken(tokenUser) {
        try {
            const { token } = tokenUser;
            const managerToken = (0, use_toke_1.useToken)(token);
            if (typeof managerToken === 'string')
                return false;
            if (managerToken.isExpired)
                return false;
            const user = await this.usersService.findOneAuth(managerToken.sub);
            return user;
        }
        catch (error) {
            throw new exceptions_1.InternalServerErrorException('Error al validar el token.');
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map