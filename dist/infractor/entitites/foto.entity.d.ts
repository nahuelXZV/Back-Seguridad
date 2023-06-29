import { BaseEntity } from "../../common/entities/base.entity";
import { InfractorEntity } from "./infractor.entity";
import { IFoto } from "../interfaces/foto.interface";
export declare class FotoEntity extends BaseEntity implements IFoto {
    dir: string;
    nombre: string;
    infractor: InfractorEntity;
}
