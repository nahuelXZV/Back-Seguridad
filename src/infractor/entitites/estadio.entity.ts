import { Entity, OneToMany, Column } from "typeorm";

import { BaseEntity } from "../../common/entities/base.entity";
import { IEstadio } from "../interfaces/estadio.interface";
import { InfraccionEntity } from "./infraccion.entity";

@Entity({ name: 'estadio' })
export class EstadioEntity extends BaseEntity implements IEstadio {

    @Column()
    nombre: string;

    @Column()
    departamento: string;

    @Column()
    ciudad: string;

    @Column()
    direccion: string;

    @OneToMany(() => InfraccionEntity, infraccion => infraccion.estadio)
    infracciones: InfraccionEntity[];
}