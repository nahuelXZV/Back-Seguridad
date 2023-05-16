import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateResult, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { CreateInfractorDto, UpdateInfractorDto } from '../dto/';
import { FotoEntity } from '../entitites/foto.entity';
import { HuellaEntity } from '../entitites/huella.entity';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { DeleteResponse } from 'src/common/interfaces/deleteResponse.interface';
import { InfractorEntity } from '../entitites/infractor.entity';

@Injectable()
export class InfractorService {

    private readonly logger = new Logger('InfractorService');
    relations = ['fotos', 'huellas'];

    constructor(
        @InjectRepository(InfractorEntity) private readonly infractorRepository: Repository<InfractorEntity>,
        @InjectRepository(FotoEntity) private readonly fotoRepository: Repository<FotoEntity>,
        @InjectRepository(HuellaEntity) private readonly huellaRepository: Repository<HuellaEntity>
    ) { }

    public async findAll(pagination: PaginationDto): Promise<InfractorEntity[]> {
        try {
            const { limit, offset } = pagination;
            if (limit && offset) return await this.infractorRepository.find({ relations: this.relations, take: limit, skip: offset, order: { createdAt: 'DESC' } });
            if (limit) return await this.infractorRepository.find({ relations: this.relations, take: limit, order: { createdAt: 'DESC' } });
            return await this.infractorRepository.find({ relations: this.relations, order: { createdAt: 'DESC' } });
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async create(createInfractorDto: CreateInfractorDto): Promise<InfractorEntity> {
        try {
            const { huellas, ...res } = createInfractorDto;
            const infractor: InfractorEntity = await this.infractorRepository.save(res, { reload: true });
            if (!infractor) throw new BadRequestException('No se pudo crear el infractor.');
            huellas.forEach(async (huella: HuellaEntity) => {
                huella.huella = this.encryptHuella(huella.huella);
                await this.huellaRepository.save({ ...huella, infractor: infractor });
            });
            return this.findOne(infractor.id);
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async findOne(id: string): Promise<InfractorEntity> {
        try {
            const infractor: InfractorEntity = await this.infractorRepository.findOne({ where: { id }, relations: this.relations });
            if (!infractor) throw new NotFoundException('Infractor no encontrado.');
            return infractor;
        } catch (error) {
            this.handlerError(error);

        }
    }

    public async update(id: string, updateInfractorDto: UpdateInfractorDto): Promise<InfractorEntity> {
        try {
            let { huellas, ...data } = updateInfractorDto;
            const infractor: InfractorEntity = await this.findOne(id);
            const infractorUpdated = await this.infractorRepository.update(infractor.id, data);
            if (infractorUpdated.affected === 0) throw new BadRequestException('Infractor no actualizado.');
            if (!huellas) return this.findOne(id);
            await this.huellaRepository.delete({ infractor: { id } });
            huellas.forEach(async (huella: HuellaEntity) => {
                huella.huella = this.encryptHuella(huella.huella);
                await this.huellaRepository.save({ ...huella, infractor: { id } });
            });
            return this.findOne(id);
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async delete(id: string): Promise<DeleteResponse> {
        try {
            const infractor: InfractorEntity = await this.findOne(id);
            const infractorDeleted = await this.infractorRepository.delete(infractor.id);
            if (infractorDeleted.affected === 0) throw new BadRequestException('Infractor no eliminado.');
            return { message: "Infractor eliminado correctamente" };
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async uploadFile(files: Array<{}>, id: string) {
        try {
            const infractor: InfractorEntity = await this.findOne(id);
            files.forEach(async (file: { dir: string, name: string }) => {
                const foto: FotoEntity = new FotoEntity();
                foto.dir = file.dir;
                foto.infractor = infractor;
                foto.nombre = file.name;
                await this.fotoRepository.save(foto);
            });
            return { message: 'Fotos subidas correctamente' };
        } catch (error) {
            this.handlerError(error);
        }
    }

    private encryptHuella(huellas: string): string {
        return bcrypt.hashSync(huellas, +process.env.HASH_SALT);
    }


    handlerError(error: any) {
        this.logger.error(error.message);
        if (error.code === '23505') throw new BadRequestException(error.detail);
        throw new InternalServerErrorException(error.message);
    }
}
