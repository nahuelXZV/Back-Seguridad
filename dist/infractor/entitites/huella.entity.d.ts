import { BaseEntity } from "../../common/entities/base.entity";
import { HUELLAS } from "../../constants";
import { IHuella } from "../interfaces/huella.interface";
import { InfractorEntity } from "./infractor.entity";
export declare class HuellaEntity extends BaseEntity implements IHuella {
    tipoHuella: HUELLAS;
    huella: string;
    infractor: InfractorEntity;
}
