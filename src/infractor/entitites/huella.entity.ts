import { Entity, ManyToOne, Column } from "typeorm";

import { BaseEntity } from "../../common/entities/base.entity";
import { HUELLAS } from "../../constants";
import { IHuella } from "../interfaces/huella.interface";
import { InfractorEntity } from "./infractor.entity";

@Entity({ name: 'huella' })
export class HuellaEntity extends BaseEntity implements IHuella {

    @Column({ name: 'tipo_huella', type: 'enum', enum: HUELLAS })
    tipoHuella: HUELLAS;

    @Column()
    huella: string;

    @ManyToOne(() => InfractorEntity, infractor => infractor.huellas, { onDelete: 'CASCADE' })
    infractor: InfractorEntity;
}