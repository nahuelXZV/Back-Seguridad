import { EstadioService } from '../services/estadio.service';
import { CreateEstadioDto, UpdateEstadioDto } from '../dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
export declare class EstadioController {
    private readonly estadioService;
    constructor(estadioService: EstadioService);
    create(createEstadioDto: CreateEstadioDto): Promise<import("../entitites/estadio.entity").EstadioEntity>;
    findAll(paginationDto: PaginationDto): Promise<import("../entitites/estadio.entity").EstadioEntity[]>;
    findOne(id: string): Promise<import("../entitites/estadio.entity").EstadioEntity>;
    update(id: string, updateEstadioDto: UpdateEstadioDto): Promise<import("../entitites/estadio.entity").EstadioEntity>;
    remove(id: string): Promise<import("../entitites/estadio.entity").EstadioEntity>;
}
