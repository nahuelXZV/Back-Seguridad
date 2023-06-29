import { SEXO } from "src/constants";
import { CreateHuellaDto } from "./create-huella.dto";
export declare class CreateInfractorDto {
    nombre: string;
    apellido: string;
    cedulaIdentidad: string;
    nacionalidad: string;
    fechaNacimiento: string;
    sexo: SEXO;
    otros: string;
    huellas: CreateHuellaDto[];
}
