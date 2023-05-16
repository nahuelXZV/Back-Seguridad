import { Entity, JoinColumn, OneToOne } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";

import { BaseEntity } from "../../common/entities/base.entity";
import { ISansion } from "../interfaces/sancion.interface";
import { InfraccionEntity } from "./infraccion.entity";

@Entity({ name: 'sansion' })
export class SansionEntity extends BaseEntity implements ISansion {

    @Column()
    nombre: string;

    @Column()
    tiempo?: string;

    @Column({ type: 'text' })
    descripcion: string;

    @Column({ name: 'fecha_inicio' })
    fechaInicio: string;

    @Column()
    estado?: string;

    @OneToOne(() => InfraccionEntity, infraccion => infraccion.sansion, { onDelete: 'CASCADE' })
    @JoinColumn()
    infraccion: InfraccionEntity;
}