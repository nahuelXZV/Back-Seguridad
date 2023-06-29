import { TestigoService } from '../services/testigo.service';
import { CreateTestigoDto, UpdateTestigoDto } from '../dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
export declare class TestigoController {
    private readonly testigoService;
    constructor(testigoService: TestigoService);
    create(createTestigoDto: CreateTestigoDto): Promise<import("../entitites/testigo.entity").TestigoEntity>;
    findAll(paginationDto: PaginationDto): Promise<import("../entitites/testigo.entity").TestigoEntity[]>;
    findOne(id: string): Promise<import("../entitites/testigo.entity").TestigoEntity>;
    update(id: string, updateTestigoDto: UpdateTestigoDto): Promise<import("../entitites/testigo.entity").TestigoEntity>;
    remove(id: string): Promise<import("../entitites/testigo.entity").TestigoEntity>;
}
