import { CreateEstadioDto, UpdateEstadioDto } from '../dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { EstadioEntity } from '../entitites/estadio.entity';
import { Repository } from 'typeorm';
export declare class EstadioService {
    private readonly estadioRepository;
    private readonly logger;
    constructor(estadioRepository: Repository<EstadioEntity>);
    create(createEstadioDto: CreateEstadioDto): Promise<EstadioEntity>;
    findAll(paginationDto: PaginationDto): Promise<EstadioEntity[]>;
    findOne(id: string): Promise<EstadioEntity>;
    update(id: string, updateEstadioDto: UpdateEstadioDto): Promise<EstadioEntity>;
    remove(id: string): Promise<EstadioEntity>;
    handlerError(error: any): void;
}
