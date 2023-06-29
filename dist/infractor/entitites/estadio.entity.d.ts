import { BaseEntity } from "../../common/entities/base.entity";
import { IEstadio } from "../interfaces/estadio.interface";
import { InfraccionEntity } from "./infraccion.entity";
export declare class EstadioEntity extends BaseEntity implements IEstadio {
    nombre: string;
    departamento: string;
    ciudad: string;
    direccion: string;
    infracciones: InfraccionEntity[];
}
