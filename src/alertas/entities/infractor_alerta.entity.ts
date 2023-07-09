import { BaseEntity } from "../../common/entities/base.entity";
import { IInfractorAlerta } from "../interfaces/infractor_alerta.interface";
import { Entity, ManyToOne } from "typeorm";
import { InfractorEntity } from "../../infractor/entitites/infractor.entity";
import { Alerta } from "./alerta.entity";

@Entity('infractor_alerta')
export class InfractorAlertaEntity extends BaseEntity implements IInfractorAlerta {

    @ManyToOne(() => InfractorEntity)
    infractor: InfractorEntity;

    @ManyToOne(() => Alerta, alerta => alerta.infractores)
    alerta: Alerta;

}