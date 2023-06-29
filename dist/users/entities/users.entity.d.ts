import { BaseEntity } from "../../common/entities/base.entity";
import { ROLES } from "../../constants";
import { IUser } from "../interfaces/user.interface";
import { InfraccionEntity } from "../../infractor/entitites/infraccion.entity";
export declare class UsersEntity extends BaseEntity implements IUser {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    role: ROLES;
    infracciones: InfraccionEntity[];
}
