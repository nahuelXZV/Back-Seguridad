import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SansionEntity } from '../entitites/sansion.entity';
import { CreateSansionDto, UpdateSansionDto } from '../dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { InfraccionService } from './infraccion.service';
import { InfraccionEntity } from '../entitites/infraccion.entity';

@Injectable()
export class SansionService {
    private readonly logger = new Logger('SancionService');

    constructor(
        @InjectRepository(SansionEntity) private readonly sansionRepository: Repository<SansionEntity>,
        private readonly infraccionService: InfraccionService
    ) { }

    public async create(createSansionDto: CreateSansionDto) {
        try {
            const { infraccion, ...res } = createSansionDto;
            const infraccionEntity: InfraccionEntity = await this.infraccionService.findOne(infraccion);
            const sansionEntity: SansionEntity = this.sansionRepository.create({ ...res, infraccion: infraccionEntity });
            await this.sansionRepository.save(sansionEntity);
            return this.findOne(sansionEntity.id);
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async findAll(paginationDto: PaginationDto) {
        try {
            const { limit, offset } = paginationDto;
            if (limit && offset) return await this.sansionRepository.find({ skip: offset, take: limit, order: { createdAt: 'DESC' } });
            if (limit) return await this.sansionRepository.find({ take: limit, order: { createdAt: 'DESC' } });
            return await this.sansionRepository.find({ order: { createdAt: 'DESC' } });
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async findOne(id: string) {
        try {
            const sansion = await this.sansionRepository.findOne({ where: { id } });
            if (!sansion) throw new BadRequestException(`El estadio con id: ${id} no existe`);
            return sansion;
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async update(id: string, updateSansionDto: UpdateSansionDto) {
        try {
            const { infraccion, ...res } = updateSansionDto;
            const sansion: SansionEntity = await this.findOne(id);
            const sansionUpdated = await this.sansionRepository.update(sansion.id, { ...res });
            if (sansionUpdated.affected === 0) throw new BadRequestException('No se ha actualizado ningún registro');
            return this.findOne(id);

        } catch (error) {
            this.handlerError(error);
        }
    }

    public async remove(id: string) {
        try {
            const sansion: SansionEntity = await this.findOne(id);
            const sansionDeleted = await this.sansionRepository.delete(sansion.id);
            if (sansionDeleted.affected === 0) throw new BadRequestException('No se ha eliminado ningún registro');
            return sansion;
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
