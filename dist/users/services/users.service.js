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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
const users_entity_1 = require("../entities/users.entity");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.logger = new common_1.Logger('UsersService');
    }
    async findAll(pagination) {
        try {
            const { limit, offset } = pagination;
            if (limit && offset)
                return await this.userRepository.find({ take: limit, skip: offset, order: { createdAt: 'DESC' } });
            if (limit)
                return await this.userRepository.find({ take: limit, order: { createdAt: 'DESC' } });
            return await this.userRepository.find({ order: { createdAt: 'DESC' } });
            ;
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async create(userDto) {
        try {
            userDto.password = this.hashPassword(userDto.password);
            const user = await this.userRepository.save(userDto);
            if (!user)
                throw new common_1.BadRequestException('Usuario no creado.');
            return this.findOne(user.id);
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async findOne(id) {
        try {
            const user = await this.userRepository.findOne({ where: { id } });
            if (!user)
                throw new common_1.NotFoundException('Usuario no encontrado.');
            return user;
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async update(id, userUpdateDto) {
        try {
            if (userUpdateDto.password)
                userUpdateDto.password = this.hashPassword(userUpdateDto.password);
            const user = await this.findOne(id);
            const userUpdated = await this.userRepository.update(user.id, userUpdateDto);
            if (userUpdated.affected === 0)
                throw new common_1.BadRequestException('Usuario no actualizado.');
            return this.findOne(user.id);
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async delete(id) {
        try {
            const user = await this.findOne(id);
            const userDeleted = await this.userRepository.delete(user.id);
            if (userDeleted.affected === 0)
                throw new common_1.BadRequestException('Usuario no eliminado.');
            return { message: 'Usuario eliminado.' };
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async findBy({ key, value }) {
        try {
            const user = await this.userRepository.createQueryBuilder('user').addSelect('user.password').where({ [key]: value }).getOne();
            if (!user)
                throw new common_1.NotFoundException('Usuario no encontrado.');
            return user;
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    async findOneAuth(id) {
        try {
            const user = await this.userRepository.createQueryBuilder('user').where('user.id = :id', { id }).getOne();
            if (!user)
                throw new common_1.UnauthorizedException('Usuario asociado al token no encontrado.');
            return user;
        }
        catch (error) {
            this.handlerError(error);
        }
    }
    hashPassword(password) {
        return bcrypt.hashSync(password, +process.env.HASH_SALT);
    }
    handlerError(error) {
        this.logger.error(error.message);
        if (error.code === '23505')
            throw new common_1.BadRequestException(error.detail);
        throw new common_1.InternalServerErrorException(error.message);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(users_entity_1.UsersEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map