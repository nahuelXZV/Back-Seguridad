/// <reference types="multer" />
import { ReconocimientoTribunaService } from '../services/reconocimiento-tribuna.service';
import { CreateAlertaDto } from 'src/alertas/dto/create-alerta.dto';
export declare class ReconocimientoTribunaController {
    private reconocimientoTribunaService;
    constructor(reconocimientoTribunaService: ReconocimientoTribunaService);
    reconocimientoTribuna(foto: Express.Multer.File, data: CreateAlertaDto): Promise<import("../../alertas/entities/alerta.entity").Alerta>;
}
