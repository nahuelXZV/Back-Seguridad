import { BaseEntity } from "src/common/entities/base.entity";
import { IInfractorAlerta } from "../interfaces/infractor_alerta.interface";
import { ManyToOne } from "typeorm";
import { InfractorEntity } from "src/infractor/entitites/infractor.entity";
import { Alerta } from "./alerta.entity";


export class InfractorAlertaEntity extends BaseEntity implements IInfractorAlerta {

    @ManyToOne(() => InfractorEntity)
    infractor: InfractorEntity;

    @ManyToOne(() => Alerta, alerta => alerta.infractores)
    alerta: Alerta;

}