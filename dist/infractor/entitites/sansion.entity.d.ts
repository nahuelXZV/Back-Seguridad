import { BaseEntity } from "../../common/entities/base.entity";
import { ISansion } from "../interfaces/sancion.interface";
import { InfraccionEntity } from "./infraccion.entity";
export declare class SansionEntity extends BaseEntity implements ISansion {
    nombre: string;
    tiempo?: string;
    descripcion: string;
    fechaInicio: string;
    estado?: string;
    infraccion: InfraccionEntity;
}
