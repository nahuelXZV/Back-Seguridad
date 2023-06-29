import { InfraccionEntity } from "../entitites/infraccion.entity";
export interface IEstadio {
    nombre: string;
    departamento: string;
    ciudad: string;
    direccion: string;
    infracciones: InfraccionEntity[];
}
