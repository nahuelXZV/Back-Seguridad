import { Entity, OneToMany, Column } from "typeorm";
import { Exclude } from "class-transformer";

import { BaseEntity } from "../../common/entities/base.entity";
import { ROLES } from "../../constants";
import { IUser } from "../interfaces/user.interface";
import { InfraccionEntity } from "../../infractor/entitites/infraccion.entity";

@Entity({ name: 'user' })
export class UsersEntity extends BaseEntity implements IUser {
    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column({ unique: true })
    email: string;

    @Exclude()
    @Column()
    password: string;

    @Column({ type: 'enum', enum: ROLES })
    role: ROLES;

    @OneToMany(() => InfraccionEntity, infraccion => infraccion.creador)
    infracciones: InfraccionEntity[];
}