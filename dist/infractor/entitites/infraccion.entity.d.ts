import { BaseEntity } from "../../common/entities/base.entity";
import { InfractorEntity } from "./infractor.entity";
import { IInfraccion } from "../interfaces/infraccion.interface";
import { EstadioEntity } from "./estadio.entity";
import { TestigoEntity } from "./testigo.entity";
import { UsersEntity } from "../../users/entities/users.entity";
import { DocumentoEntity } from "./documento.entity";
import { SansionEntity } from "./sansion.entity";
export declare class InfraccionEntity extends BaseEntity implements IInfraccion {
    fecha: string;
    hora: string;
    seccion: string;
    fila: string;
    asiento: string;
    descripcion: string;
    estado: string;
    sansion: SansionEntity;
    infractor: InfractorEntity;
    estadio: EstadioEntity;
    creador: UsersEntity;
    testigos: TestigoEntity[];
    documentos: DocumentoEntity[];
}
