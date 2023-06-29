import { InfractorEntity } from '../entitites/infractor.entity';
import { InfractorService } from '../services/infractor.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateInfractorDto, UpdateInfractorDto } from '../dto';
export declare class InfractorController {
    private readonly infractorService;
    constructor(infractorService: InfractorService);
    create(createInfractorDto: CreateInfractorDto): Promise<InfractorEntity>;
    findAll(paginationDto: PaginationDto): Promise<InfractorEntity[]>;
    findOne(id: string): Promise<InfractorEntity>;
    update(id: string, updateInfractorDto: UpdateInfractorDto): Promise<InfractorEntity>;
    delete(id: string): Promise<{}>;
}
