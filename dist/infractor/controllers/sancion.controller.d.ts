import { SansionService } from '../services/sansion.service';
import { CreateSansionDto, UpdateSansionDto } from '../dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
export declare class SancionController {
    private readonly sansionService;
    constructor(sansionService: SansionService);
    create(createSansionDto: CreateSansionDto): Promise<import("../entitites/sansion.entity").SansionEntity>;
    findAll(paginationDto: PaginationDto): Promise<import("../entitites/sansion.entity").SansionEntity[]>;
    findOne(id: string): Promise<import("../entitites/sansion.entity").SansionEntity>;
    update(id: string, updateSansionDto: UpdateSansionDto): Promise<import("../entitites/sansion.entity").SansionEntity>;
    remove(id: string): Promise<import("../entitites/sansion.entity").SansionEntity>;
}
