import { Column, Entity, ManyToOne } from "typeorm";

import { BaseEntity } from "../../common/entities/base.entity";
import { ITestigo } from "../interfaces/testigo.interface";
import { InfraccionEntity } from "./infraccion.entity";

@Entity({ name: 'testigo' })
export class TestigoEntity extends BaseEntity implements ITestigo {

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column({ name: 'cedula_identidad' })
    cedulaIdentidad: string;

    @Column()
    nacionalidad: string;

    @Column()
    sexo: string;

    @Column()
    telefono: string;

    @ManyToOne(() => InfraccionEntity, infraccion => infraccion.testigos, { onDelete: 'CASCADE' })
    infraccion: InfraccionEntity;
}