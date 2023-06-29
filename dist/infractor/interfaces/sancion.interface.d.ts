import { InfraccionEntity } from "../entitites/infraccion.entity";
export interface ISansion {
    nombre: string;
    tiempo?: string;
    descripcion: string;
    fechaInicio: string;
    estado?: string;
    infraccion: InfraccionEntity;
}
