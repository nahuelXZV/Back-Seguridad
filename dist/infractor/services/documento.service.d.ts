/// <reference types="multer" />
import { S3Service } from 'src/providers/s3/s3.service';
import { DocumentoEntity } from '../entitites/documento.entity';
import { Repository } from 'typeorm';
import { InfraccionService } from './infraccion.service';
import { CreateDocumentoDto } from '../dto/create-documento.dto';
export declare class DocumentoService {
    private readonly s3Service;
    private readonly infraccionService;
    private readonly documentoRepository;
    constructor(s3Service: S3Service, infraccionService: InfraccionService, documentoRepository: Repository<DocumentoEntity>);
    uploadFile(documentos: Array<Express.Multer.File>, createDocumentoDto: CreateDocumentoDto): Promise<any>;
    deleteFile(documento_id: string): Promise<any>;
}
