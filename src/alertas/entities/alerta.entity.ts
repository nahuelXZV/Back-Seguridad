import { Column, Entity, OneToMany } from "typeorm";
import { IAlerta } from "../interfaces/alerta.interface";
import { BaseEntity } from "src/common/entities/base.entity";
import { Imagene } from "./imagene.entity";
import { InfractorAlertaEntity } from "./infractor_alerta.entity";

@Entity({ name: 'alerta' })
export class Alerta extends BaseEntity implements IAlerta {

    @Column()
    motivo: string;

    @Column()
    fecha: string;

    @Column()
    hora: string;

    @OneToMany(() => Imagene, imagene => imagene.alerta)
    imagenes: Imagene[];

    @OneToMany(() => InfractorAlertaEntity, infractorAlerta => infractorAlerta.alerta)
    infractores: InfractorAlertaEntity[];
}
