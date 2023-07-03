import { IInfractor } from "src/infractor/interfaces/infractor.interface";
import { IAlerta } from "./alerta.interface";

export interface IInfractorAlerta {
    infractor: IInfractor;
    alerta: IAlerta;
}