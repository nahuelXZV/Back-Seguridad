import { BaseEntity } from "../../common/entities/base.entity";
import { IImagenes } from "../interfaces/imagenes.interface";
import { Alerta } from "./alerta.entity";
export declare class Imagene extends BaseEntity implements IImagenes {
    nombre: string;
    dir: string;
    tipo: string;
    alerta: Alerta;
}
