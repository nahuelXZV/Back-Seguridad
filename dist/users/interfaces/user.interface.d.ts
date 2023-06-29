import { InfraccionEntity } from "src/infractor/entitites/infraccion.entity";
export interface IUser {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    role: string;
    infracciones: InfraccionEntity[];
}
