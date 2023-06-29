/// <reference types="multer" />
import { S3Service } from '../s3/s3.service';
export declare class RecoknitionService {
    private readonly s3Service;
    private readonly rekognition;
    constructor(s3Service: S3Service);
    searchEventosUsuariosFaces(foto: Express.Multer.File): Promise<string[]>;
    compareEventosUsuariosFaces(foto: Express.Multer.File, usuariosImages: string[]): Promise<string[]>;
    compareFaces(sourceImage: string, targetImage: string): Promise<number>;
    uploadTempFile(foto: Express.Multer.File): Promise<{
        key: string;
        location: string;
    }>;
    deleteTempFile(key: string): Promise<void>;
}
