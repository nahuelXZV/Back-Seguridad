import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateInfraccionDto, UpdateInfraccionDto } from '../dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { InfraccionEntity } from '../entitites/infraccion.entity';
import { Repository } from 'typeorm';
import { EstadioService } from './estadio.service';
import { UsersService } from 'src/users/services/users.service';
import { EstadioEntity } from '../entitites/estadio.entity';
import { UsersEntity } from 'src/users/entities/users.entity';
import { InfractorEntity } from '../entitites/infractor.entity';
import { InfractorService } from './infractor.service';

@Injectable()
export class InfraccionService {

    private readonly logger = new Logger('InfraccionService');
    relations = ['estadio', 'creador', 'sansion', 'testigos', 'documentos'];

    constructor(
        @InjectRepository(InfraccionEntity) private readonly infraccionRepository: Repository<InfraccionEntity>,
        private readonly infractorService: InfractorService,
        private readonly estadioService: EstadioService,
        private readonly userService: UsersService
    ) { }

    public async create(createInfraccionDto: CreateInfraccionDto) {
        try {
            const { estadio, creador, infractor, ...res } = createInfraccionDto;
            const estadioEntity: EstadioEntity = await this.estadioService.findOne(estadio);
            const creadorEntity: UsersEntity = await this.userService.findOne(creador);
            const infractorEntity: InfractorEntity = await this.infractorService.findOne(infractor);
            const infraccionEntity: InfraccionEntity = this.infraccionRepository.create({ ...res, estadio: estadioEntity, creador: creadorEntity, infractor: infractorEntity });
            await this.infraccionRepository.save(infraccionEntity);
            return this.findOne(infraccionEntity.id);
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async findAll(paginationDto: PaginationDto) {
        try {
            const { limit, offset } = paginationDto;
            if (limit && offset) return await this.infraccionRepository.find({ relations: this.relations, skip: offset, take: limit, order: { createdAt: 'DESC' } });
            if (limit) return await this.infraccionRepository.find({ relations: this.relations, take: limit, order: { createdAt: 'DESC' } });
            return await this.infraccionRepository.find({ relations: this.relations, order: { createdAt: 'DESC' } });
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async findOne(id: string) {
        try {
            const infraccionEntity: InfraccionEntity = await this.infraccionRepository.findOne({ where: { id }, relations: this.relations });
            if (!infraccionEntity) throw new BadRequestException(`La infraccion con id ${id} no existe`);
            return infraccionEntity;
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async update(id: string, updateInfraccionDto: UpdateInfraccionDto) {
        try {
            const { estadio, creador, infractor, ...res } = updateInfraccionDto;
            const infracionEntity: InfraccionEntity = await this.findOne(id);
            const infraccionUpdated = await this.infraccionRepository.update(infracionEntity.id, { ...res });
            if (infraccionUpdated.affected === 0) throw new BadRequestException(`La infraccion con id ${id} no existe`);
            return this.findOne(id);
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async remove(id: string) {
        try {
            const infraccionEntity: InfraccionEntity = await this.findOne(id);
            const infraccionDeleted = await this.infraccionRepository.delete(infraccionEntity.id);
            if (infraccionDeleted.affected === 0) throw new BadRequestException(`La infraccion con id ${id} no existe`);
            return infraccionEntity;
        } catch (error) {
            this.handlerError(error);
        }
    }

    handlerError(error: any) {
        this.logger.error(error.message);
        if (error.code === '23505') throw new BadRequestException(error.detail);
        throw new InternalServerErrorException(error.message);
    }
}
