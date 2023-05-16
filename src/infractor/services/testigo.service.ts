import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestigoEntity } from '../entitites/testigo.entity';
import { Repository } from 'typeorm';
import { CreateTestigoDto, UpdateTestigoDto } from '../dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { InfraccionService } from './infraccion.service';
import { InfraccionEntity } from '../entitites/infraccion.entity';

@Injectable()
export class TestigoService {

    private readonly logger = new Logger('TestigoService');

    constructor(
        @InjectRepository(TestigoEntity) private readonly testigoRepository: Repository<TestigoEntity>,
        private readonly infraccionService: InfraccionService,
    ) { }

    public async create(createTestigoDto: CreateTestigoDto) {
        try {
            const { infraccion, ...res } = createTestigoDto;
            const infraccionEntity: InfraccionEntity = await this.infraccionService.findOne(infraccion);
            const testigoEntity: TestigoEntity = this.testigoRepository.create({ ...res, infraccion: infraccionEntity });
            await this.testigoRepository.save(testigoEntity);
            return this.findOne(testigoEntity.id);
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async findAll(paginationDto: PaginationDto) {
        try {
            const { limit, offset } = paginationDto;
            if (limit && offset) return await this.testigoRepository.find({ skip: offset, take: limit, order: { createdAt: 'DESC' } });
            if (limit) return await this.testigoRepository.find({ take: limit, order: { createdAt: 'DESC' } });
            return await this.testigoRepository.find({ order: { createdAt: 'DESC' } });
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async findOne(id: string) {
        try {
            const testigoEntity: TestigoEntity = await this.testigoRepository.findOne({ where: { id } });
            if (!testigoEntity) throw new BadRequestException(`El testigo con id ${id} no existe`);
            return testigoEntity;
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async update(id: string, updateTestigoDto: UpdateTestigoDto) {
        try {
            const { infraccion, ...res } = updateTestigoDto;
            const testigoEntity: TestigoEntity = await this.findOne(id);
            const testigoUpdated = await this.testigoRepository.update(testigoEntity.id, { ...res });
            if (testigoUpdated.affected === 0) throw new BadRequestException(`El testigo con id ${id} no existe`);
            return this.findOne(id);
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async remove(id: string) {
        try {
            const testigoEntity: TestigoEntity = await this.findOne(id);
            const testigoDeleted = await this.testigoRepository.delete(testigoEntity.id);
            if (testigoDeleted.affected === 0) throw new BadRequestException(`El testigo con id ${id} no existe`);
            return testigoEntity;
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
