import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
export declare class ExampleService {
    private readonly logger;
    constructor();
    create(createEstadioDto: CreateExampleDto): Promise<void>;
    findAll(paginationDto: PaginationDto): Promise<void>;
    findOne(id: string): Promise<void>;
    update(id: string, updateEstadioDto: UpdateExampleDto): Promise<void>;
    remove(id: string): Promise<void>;
    handlerError(error: any): void;
}
