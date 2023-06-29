import { InfraccionEntity } from "./infraccion.entity";
import { BaseEntity } from "../../common/entities/base.entity";
import { IDocumento } from "../interfaces/documento.interface";
export declare class DocumentoEntity extends BaseEntity implements IDocumento {
    dir: string;
    nombre: string;
    descripcion: string;
    tipo: string;
    infraccion: InfraccionEntity;
}
