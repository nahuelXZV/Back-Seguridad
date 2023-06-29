import { BaseEntity } from "../../common/entities/base.entity";
import { ITestigo } from "../interfaces/testigo.interface";
import { InfraccionEntity } from "./infraccion.entity";
export declare class TestigoEntity extends BaseEntity implements ITestigo {
    nombre: string;
    apellido: string;
    cedulaIdentidad: string;
    nacionalidad: string;
    sexo: string;
    telefono: string;
    infraccion: InfraccionEntity;
}
