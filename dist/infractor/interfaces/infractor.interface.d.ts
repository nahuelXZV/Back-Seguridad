import { FotoEntity } from "../entitites/foto.entity";
import { HuellaEntity } from "../entitites/huella.entity";
import { InfraccionEntity } from "../entitites/infraccion.entity";
export interface IInfractor {
    nombre: string;
    apellido: string;
    cedulaIdentidad: string;
    nacionalidad: string;
    fechaNacimiento: string;
    sexo: string;
    otros: string;
    huellas: HuellaEntity[];
    fotos: FotoEntity[];
    infracciones?: InfraccionEntity[];
}
