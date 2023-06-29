/// <reference types="multer" />
import { FilesService } from '../services/files.service';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    uploadFile(fotos: Array<Express.Multer.File>, infractor_id: string): Promise<any>;
}
