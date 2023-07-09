import { IAlerta } from "../interfaces/alerta.interface";
import { BaseEntity } from "../../common/entities/base.entity";
import { Imagene } from "./imagene.entity";
import { InfractorAlertaEntity } from "./infractor_alerta.entity";
export declare class Alerta extends BaseEntity implements IAlerta {
    motivo: string;
    fecha: string;
    hora: string;
    imagenes: Imagene[];
    infractores: InfractorAlertaEntity[];
}
