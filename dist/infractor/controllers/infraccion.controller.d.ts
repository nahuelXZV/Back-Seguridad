import { InfraccionService } from '../services/infraccion.service';
import { CreateInfraccionDto, UpdateInfraccionDto } from '../dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
export declare class InfraccionController {
    private readonly infraccionService;
    constructor(infraccionService: InfraccionService);
    create(createInfraccionDto: CreateInfraccionDto): Promise<import("../entitites/infraccion.entity").InfraccionEntity>;
    findAll(paginationDto: PaginationDto): Promise<import("../entitites/infraccion.entity").InfraccionEntity[]>;
    findOne(id: string): Promise<import("../entitites/infraccion.entity").InfraccionEntity>;
    update(id: string, updateInfraccionDto: UpdateInfraccionDto): Promise<import("../entitites/infraccion.entity").InfraccionEntity>;
    remove(id: string): Promise<import("../entitites/infraccion.entity").InfraccionEntity>;
}
