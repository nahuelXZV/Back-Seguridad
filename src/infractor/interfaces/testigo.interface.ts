import { InfraccionEntity } from "../entitites/infraccion.entity";

export interface ITestigo {
    nombre: string;
    apellido: string;
    cedulaIdentidad: string;
    nacionalidad: string;
    sexo: string;
    telefono: string;
    infraccion: InfraccionEntity;
}