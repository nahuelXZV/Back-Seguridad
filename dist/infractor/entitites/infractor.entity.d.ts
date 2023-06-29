import { BaseEntity } from "../../common/entities/base.entity";
import { IInfractor } from "../interfaces/infractor.interface";
import { SEXO } from "../../constants";
import { HuellaEntity } from "./huella.entity";
import { FotoEntity } from "./foto.entity";
import { InfraccionEntity } from "./infraccion.entity";
export declare class InfractorEntity extends BaseEntity implements IInfractor {
    nombre: string;
    apellido: string;
    cedulaIdentidad: string;
    nacionalidad: string;
    fechaNacimiento: string;
    sexo: SEXO;
    otros: string;
    huellas: HuellaEntity[];
    fotos: FotoEntity[];
    infracciones: InfraccionEntity[];
}
