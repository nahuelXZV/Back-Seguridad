import { Repository } from 'typeorm';
import { SansionEntity } from '../entitites/sansion.entity';
import { CreateSansionDto, UpdateSansionDto } from '../dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { InfraccionService } from './infraccion.service';
export declare class SansionService {
    private readonly sansionRepository;
    private readonly infraccionService;
    private readonly logger;
    constructor(sansionRepository: Repository<SansionEntity>, infraccionService: InfraccionService);
    create(createSansionDto: CreateSansionDto): Promise<SansionEntity>;
    findAll(paginationDto: PaginationDto): Promise<SansionEntity[]>;
    findOne(id: string): Promise<SansionEntity>;
    update(id: string, updateSansionDto: UpdateSansionDto): Promise<SansionEntity>;
    remove(id: string): Promise<SansionEntity>;
    handlerError(error: any): void;
}
