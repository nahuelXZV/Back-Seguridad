/// <reference types="multer" />
import { ReconocimientoFacialService } from '../services/reconocimiento-facial.service';
export declare class ReconocimientoFacialController {
    private readonly reconocimientoFacialService;
    constructor(reconocimientoFacialService: ReconocimientoFacialService);
    reconocimientoFacial(foto: Express.Multer.File): Promise<import("../../infractor/entitites/infractor.entity").InfractorEntity>;
}
