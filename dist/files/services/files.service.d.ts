/// <reference types="multer" />
import { InfractorService } from 'src/infractor/services/infractor.service';
import { S3Service } from 'src/providers/s3/s3.service';
export declare class FilesService {
    private readonly infractorService;
    private readonly s3Service;
    constructor(infractorService: InfractorService, s3Service: S3Service);
    uploadFile(fotos: Array<Express.Multer.File>, id: string): Promise<any>;
}
