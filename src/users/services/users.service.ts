import { Repository } from 'typeorm';
import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

import { UserDTO, UserUpdateDTO } from '../dto/';
import { UsersEntity } from '../entities/users.entity';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { DeleteResponse } from 'src/common/interfaces/deleteResponse.interface';

@Injectable()
export class UsersService {
    private readonly logger = new Logger('UsersService');

    constructor(
        @InjectRepository(UsersEntity) private readonly userRepository: Repository<UsersEntity>
    ) { }

    public async findAll(pagination: PaginationDto): Promise<UsersEntity[]> {
        try {
            const { limit, offset } = pagination;
            if (limit && offset) return await this.userRepository.find({ take: limit, skip: offset, order: { createdAt: 'DESC' } });
            if (limit) return await this.userRepository.find({ take: limit, order: { createdAt: 'DESC' } });
            return await this.userRepository.find({ order: { createdAt: 'DESC' } });;
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async create(userDto: UserDTO): Promise<UsersEntity> {
        try {
            userDto.password = this.hashPassword(userDto.password);
            const user: UsersEntity = await this.userRepository.save(userDto);
            if (!user) throw new BadRequestException('Usuario no creado.');
            return this.findOne(user.id);
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async findOne(id: string): Promise<UsersEntity> {
        try {
            const user: UsersEntity = await this.userRepository.findOne({ where: { id } });
            if (!user) throw new NotFoundException('Usuario no encontrado.');
            return user;
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async update(id: string, userUpdateDto: UserUpdateDTO): Promise<UsersEntity> {
        try {
            if (userUpdateDto.password) userUpdateDto.password = this.hashPassword(userUpdateDto.password);
            const user: UsersEntity = await this.findOne(id);
            const userUpdated = await this.userRepository.update(user.id, userUpdateDto);
            if (userUpdated.affected === 0) throw new BadRequestException('Usuario no actualizado.');
            return this.findOne(user.id);
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async delete(id: string): Promise<DeleteResponse> {
        try {
            const user: UsersEntity = await this.findOne(id);
            const userDeleted = await this.userRepository.delete(user.id);
            if (userDeleted.affected === 0) throw new BadRequestException('Usuario no eliminado.');
            return { message: 'Usuario eliminado.' };
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async findBy({ key, value }: { key: keyof UserDTO; value: any }) {
        try {
            const user: UsersEntity = await this.userRepository.createQueryBuilder('user').addSelect('user.password').where({ [key]: value }).getOne();
            if (!user) throw new NotFoundException('Usuario no encontrado.');
            return user;
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async findOneAuth(id: string): Promise<UsersEntity> {
        try {
            const user: UsersEntity = await this.userRepository.createQueryBuilder('user').where('user.id = :id', { id }).getOne();
            if (!user) throw new UnauthorizedException('Usuario asociado al token no encontrado.');
            return user;
        } catch (error) {
            this.handlerError(error);
        }
    }

    private hashPassword(password: string): string {
        return bcrypt.hashSync(password, +process.env.HASH_SALT);
    }

    handlerError(error: any) {
        this.logger.error(error.message);
        if (error.code === '23505') throw new BadRequestException(error.detail);
        throw new InternalServerErrorException(error.message);
    }
}
