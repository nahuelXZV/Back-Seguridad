import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateEstadioDto, UpdateEstadioDto } from '../dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { EstadioEntity } from '../entitites/estadio.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EstadioService {
    private readonly logger = new Logger('EstadioService');

    constructor(
        @InjectRepository(EstadioEntity) private readonly estadioRepository: Repository<EstadioEntity>,
    ) { }

    public async create(createEstadioDto: CreateEstadioDto) {
        try {
            const estadio = this.estadioRepository.create(createEstadioDto);
            await this.estadioRepository.save(estadio);
            return this.findOne(estadio.id);
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async findAll(paginationDto: PaginationDto) {
        try {
            const { limit, offset } = paginationDto;
            if (limit && offset) return await this.estadioRepository.find({ skip: offset, take: limit, order: { createdAt: 'DESC' } });
            if (limit) return await this.estadioRepository.find({ take: limit, order: { createdAt: 'DESC' } });
            return await this.estadioRepository.find({ order: { createdAt: 'DESC' } });
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async findOne(id: string) {
        try {
            const estadio = await this.estadioRepository.findOne({ where: { id } });
            if (!estadio) throw new BadRequestException(`El estadio con id: ${id} no existe`);
            return estadio;
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async update(id: string, updateEstadioDto: UpdateEstadioDto) {
        try {
            const estadio = await this.findOne(id);
            await this.estadioRepository.update(estadio.id, { ...updateEstadioDto });
            return this.findOne(id);
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async remove(id: string) {
        try {
            const estadio = await this.findOne(id);
            const estadioDeleted = await this.estadioRepository.delete(estadio.id);
            if (estadioDeleted.affected === 0) throw new BadRequestException(`El estadio con id: ${id} no se pudo eliminar`);
            return estadio;
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
