import { Repository } from 'typeorm';
import { CreateInfractorDto, UpdateInfractorDto } from '../dto/';
import { FotoEntity } from '../entitites/foto.entity';
import { HuellaEntity } from '../entitites/huella.entity';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { DeleteResponse } from 'src/common/interfaces/deleteResponse.interface';
import { InfractorEntity } from '../entitites/infractor.entity';
export declare class InfractorService {
    private readonly infractorRepository;
    private readonly fotoRepository;
    private readonly huellaRepository;
    private readonly logger;
    relations: string[];
    constructor(infractorRepository: Repository<InfractorEntity>, fotoRepository: Repository<FotoEntity>, huellaRepository: Repository<HuellaEntity>);
    findAll(pagination: PaginationDto): Promise<InfractorEntity[]>;
    create(createInfractorDto: CreateInfractorDto): Promise<InfractorEntity>;
    findOne(id: string): Promise<InfractorEntity>;
    update(id: string, updateInfractorDto: UpdateInfractorDto): Promise<InfractorEntity>;
    delete(id: string): Promise<DeleteResponse>;
    uploadFile(files: Array<{}>, id: string): Promise<{
        message: string;
    }>;
    private encryptHuella;
    handlerError(error: any): void;
}
