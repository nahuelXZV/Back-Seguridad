/// <reference types="multer" />
import { Imagene } from '../entities/imagene.entity';
import { Repository } from 'typeorm';
import { S3Service } from 'src/providers/s3/s3.service';
import { AlertaService } from './alerta.service';
export declare class ImagenesService {
    private readonly imageneRepository;
    private alertaService;
    private readonly s3Service;
    constructor(imageneRepository: Repository<Imagene>, alertaService: AlertaService, s3Service: S3Service);
    create(foto: Express.Multer.File, id: string): Promise<any>;
    findAll(): Promise<Imagene[]>;
    findOne(id: string): Promise<Imagene>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
