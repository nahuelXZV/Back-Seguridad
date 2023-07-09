/// <reference types="multer" />
import { CreateAlertaDto } from 'src/alertas/dto/create-alerta.dto';
import { AlertaService } from 'src/alertas/services/alerta.service';
import { ImagenesService } from 'src/alertas/services/imagenes.service';
import { RecoknitionService } from 'src/providers/recoknition/recoknition.service';
export declare class ReconocimientoTribunaService {
    private readonly recoknitionService;
    private readonly alertaService;
    private readonly imagenService;
    private readonly logger;
    constructor(recoknitionService: RecoknitionService, alertaService: AlertaService, imagenService: ImagenesService);
    reconocimientoTribuna(foto: Express.Multer.File, data: CreateAlertaDto): Promise<import("../../alertas/entities/alerta.entity").Alerta>;
    reconocimientoFacial(foto: Express.Multer.File): Promise<string[]>;
    extraerUUID(cadena: string): string;
    eliminarDuplicados(array: string[]): string[];
    getUsers(fotos: string[]): string[];
    handlerError(error: any): void;
}
