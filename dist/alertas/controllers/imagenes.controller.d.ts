/// <reference types="multer" />
import { ImagenesService } from '../services/imagenes.service';
export declare class ImagenesController {
    private readonly imagenesService;
    constructor(imagenesService: ImagenesService);
    create(foto: Express.Multer.File, alerta_id: string): Promise<any>;
    findAll(): Promise<import("../entities/imagene.entity").Imagene[]>;
    findOne(id: string): Promise<import("../entities/imagene.entity").Imagene>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
