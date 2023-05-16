import { Entity, ManyToOne, Column } from "typeorm";

import { BaseEntity } from "../../common/entities/base.entity";
import { InfractorEntity } from "./infractor.entity";
import { IFoto } from "../interfaces/foto.interface";

@Entity({ name: 'foto' })
export class FotoEntity extends BaseEntity implements IFoto {

    @Column()
    dir: string;

    @Column()
    nombre: string;

    @ManyToOne(() => InfractorEntity, infractor => infractor.fotos, { onDelete: 'CASCADE' })
    infractor: InfractorEntity;
}