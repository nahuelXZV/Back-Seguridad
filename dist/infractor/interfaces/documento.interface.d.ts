import { InfraccionEntity } from "../entitites/infraccion.entity";
export interface IDocumento {
    nombre: string;
    dir: string;
    descripcion: string;
    tipo: string;
    infraccion: InfraccionEntity;
}
