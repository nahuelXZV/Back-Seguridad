import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateEstadioDto, UpdateEstadioDto } from 'src/infractor/dto';
import { EstadioService } from 'src/infractor/services/estadio.service';
export declare class ExampleController {
    private readonly estadioService;
    constructor(estadioService: EstadioService);
    create(createEstadioDto: CreateEstadioDto): Promise<import("../infractor/entitites/estadio.entity").EstadioEntity>;
    findAll(paginationDto: PaginationDto): Promise<import("../infractor/entitites/estadio.entity").EstadioEntity[]>;
    findOne(id: string): Promise<import("../infractor/entitites/estadio.entity").EstadioEntity>;
    update(id: string, updateEstadioDto: UpdateEstadioDto): Promise<import("../infractor/entitites/estadio.entity").EstadioEntity>;
    remove(id: string): Promise<import("../infractor/entitites/estadio.entity").EstadioEntity>;
}
