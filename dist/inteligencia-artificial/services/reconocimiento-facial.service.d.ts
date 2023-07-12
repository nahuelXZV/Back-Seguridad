/// <reference types="multer" />
import { InfractorService } from 'src/infractor/services/infractor.service';
import { RecoknitionService } from 'src/providers/recoknition/recoknition.service';
export declare class ReconocimientoFacialService {
    private readonly recoknitionService;
    private readonly infractorService;
    private readonly logger;
    constructor(recoknitionService: RecoknitionService, infractorService: InfractorService);
    reconocimientoFacial(foto: Express.Multer.File): Promise<import("../../infractor/entitites/infractor.entity").InfractorEntity>;
    extraerUUID(cadena: string): string;
    eliminarDuplicados(array: string[]): string[];
    getUsers(fotos: string[]): string[];
    handlerError(error: any): void;
}
