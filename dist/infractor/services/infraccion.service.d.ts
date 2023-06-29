import { CreateInfraccionDto, UpdateInfraccionDto } from '../dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { InfraccionEntity } from '../entitites/infraccion.entity';
import { Repository } from 'typeorm';
import { EstadioService } from './estadio.service';
import { UsersService } from 'src/users/services/users.service';
import { InfractorService } from './infractor.service';
export declare class InfraccionService {
    private readonly infraccionRepository;
    private readonly infractorService;
    private readonly estadioService;
    private readonly userService;
    private readonly logger;
    relations: string[];
    constructor(infraccionRepository: Repository<InfraccionEntity>, infractorService: InfractorService, estadioService: EstadioService, userService: UsersService);
    create(createInfraccionDto: CreateInfraccionDto): Promise<InfraccionEntity>;
    findAll(paginationDto: PaginationDto): Promise<InfraccionEntity[]>;
    findOne(id: string): Promise<InfraccionEntity>;
    update(id: string, updateInfraccionDto: UpdateInfraccionDto): Promise<InfraccionEntity>;
    remove(id: string): Promise<InfraccionEntity>;
    handlerError(error: any): void;
}
