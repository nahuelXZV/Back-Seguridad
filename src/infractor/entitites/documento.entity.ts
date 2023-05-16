import { Entity, ManyToOne, Column } from "typeorm";

import { InfraccionEntity } from "./infraccion.entity";
import { BaseEntity } from "../../common/entities/base.entity";
import { IDocumento } from "../interfaces/documento.interface";

@Entity({ name: 'documento' })
export class DocumentoEntity extends BaseEntity implements IDocumento {

    @Column()
    dir: string;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column()
    tipo: string;

    @ManyToOne(() => InfraccionEntity, infraccion => infraccion.documentos, { onDelete: 'CASCADE' })
    infraccion: InfraccionEntity;
}