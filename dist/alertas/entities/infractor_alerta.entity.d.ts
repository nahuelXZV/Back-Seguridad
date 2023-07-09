import { BaseEntity } from "../../common/entities/base.entity";
import { IInfractorAlerta } from "../interfaces/infractor_alerta.interface";
import { InfractorEntity } from "../../infractor/entitites/infractor.entity";
import { Alerta } from "./alerta.entity";
export declare class InfractorAlertaEntity extends BaseEntity implements IInfractorAlerta {
    infractor: InfractorEntity;
    alerta: Alerta;
}
