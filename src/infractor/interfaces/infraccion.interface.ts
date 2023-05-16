import { UsersEntity } from "src/users/entities/users.entity";
import { EstadioEntity } from "../entitites/estadio.entity";
import { InfractorEntity } from "../entitites/infractor.entity";
import { TestigoEntity } from "../entitites/testigo.entity";
import { DocumentoEntity } from "../entitites/documento.entity";
import { SansionEntity } from "../entitites/sansion.entity";

export interface IInfraccion {
    fecha: string;
    hora: string;
    seccion: string;
    fila: string;
    asiento: string;
    descripcion: string;
    estado: string;
    infractor: InfractorEntity;
    estadio: EstadioEntity;
    creador: UsersEntity;
    sansion: SansionEntity;
    documentos: DocumentoEntity[];
    testigos: TestigoEntity[];
}