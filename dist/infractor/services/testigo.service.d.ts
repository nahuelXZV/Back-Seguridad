import { TestigoEntity } from '../entitites/testigo.entity';
import { Repository } from 'typeorm';
import { CreateTestigoDto, UpdateTestigoDto } from '../dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { InfraccionService } from './infraccion.service';
export declare class TestigoService {
    private readonly testigoRepository;
    private readonly infraccionService;
    private readonly logger;
    constructor(testigoRepository: Repository<TestigoEntity>, infraccionService: InfraccionService);
    create(createTestigoDto: CreateTestigoDto): Promise<TestigoEntity>;
    findAll(paginationDto: PaginationDto): Promise<TestigoEntity[]>;
    findOne(id: string): Promise<TestigoEntity>;
    update(id: string, updateTestigoDto: UpdateTestigoDto): Promise<TestigoEntity>;
    remove(id: string): Promise<TestigoEntity>;
    handlerError(error: any): void;
}
