import { Injectable } from '@nestjs/common';
import * as AWS from "aws-sdk";
import { S3Service } from '../s3/s3.service';

@Injectable()
export class RecoknitionService {

    private readonly rekognition: AWS.Rekognition

    constructor(
        private readonly s3Service: S3Service
    ) {
        this.rekognition = new AWS.Rekognition({ region: 'us-east-2', apiVersion: '2016-06-27', credentials: { accessKeyId: process.env.AWS_S3_ACCESS_KEY, secretAccessKey: process.env.AWS_S3_KEY_SECRET } });
    }

    async searchEventosUsuariosFaces(foto: Express.Multer.File): Promise<string[]> {
        const usuariosImages = await this.s3Service.getUsuariosImages();
        const matchedImages = await this.compareEventosUsuariosFaces(foto, usuariosImages);
        return matchedImages;
    }

    async compareEventosUsuariosFaces(foto: Express.Multer.File, usuariosImages: string[]): Promise<string[]> {
        const matchedImages: string[] = [];
        const file = await this.uploadTempFile(foto);
        console.log(file);
        for (const usuariosImage of usuariosImages) {
            const similarity = await this.compareFaces(file.key, usuariosImage);
            if (similarity >= 80) {
                matchedImages.push(usuariosImage);
            }
        }
        await this.s3Service.deleteTempFile(file.key);
        return matchedImages;
    }

    async compareFaces(sourceImage: string, targetImage: string): Promise<number> {
        const params: AWS.Rekognition.CompareFacesRequest = {
            SourceImage: {
                S3Object: {
                    Bucket: process.env.AWS_S3_BUCKET,
                    Name: sourceImage,
                },
            },
            TargetImage: {
                S3Object: {
                    Bucket: process.env.AWS_S3_BUCKET,
                    Name: targetImage,
                },
            },
            SimilarityThreshold: 80, // El umbral de similitud mínimo que deseas establecer para la comparación
        };
        try {
            const result = await this.rekognition.compareFaces(params).promise();
            return result?.FaceMatches[0]?.Similarity || 0;
        } catch (error) {
            console.log(error);
            return 0;
        }
    }

    async uploadTempFile(foto: Express.Multer.File): Promise<{ key: string, location: string }> {
        const path = await this.s3Service.uploadFile(foto, "temporal/" + foto.originalname);
        return {
            key: path.key,
            location: path.Location
        };
    }

    async deleteTempFile(key: string): Promise<void> {
        await this.s3Service.deleteTempFile(key);
    }
}
