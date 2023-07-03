import { IAlerta } from "./alerta.interface";

export interface IImagenes {
    nombre: string;
    dir: string;
    tipo: string;
    alerta: IAlerta;
}