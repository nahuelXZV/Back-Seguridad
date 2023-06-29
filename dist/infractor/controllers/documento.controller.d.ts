/// <reference types="multer" />
import { DocumentoService } from '../services/documento.service';
import { CreateDocumentoDto } from '../dto/create-documento.dto';
export declare class DocumentoController {
    private readonly documentoService;
    constructor(documentoService: DocumentoService);
    uploadFile(documentos: Array<Express.Multer.File>, createDocumentoDto: CreateDocumentoDto): Promise<any>;
    deleteFile(documento_id: string): Promise<any>;
}
