import { BadRequestException, Injectable } from '@nestjs/common';
import { InfractorService } from 'src/infractor/services/infractor.service';
import { S3Service } from 'src/providers/s3/s3.service';

@Injectable()
export class FilesService {

    constructor(
        private readonly infractorService: InfractorService,
        private readonly s3Service: S3Service
    ) { }

    async uploadFile(fotos: Array<Express.Multer.File>, id: string): Promise<any> {
        try {
            const dataFiles = [];
            fotos.forEach((foto) => {
                const originalname = foto.originalname.split('.')[0];
                const fileName = `${originalname}_${id}`;
                const path = this.s3Service.uploadFile(foto, fileName);
                let data = {
                    dir: path,
                    name: fileName,
                };
                dataFiles.push(data);
            });
            return await this.infractorService.uploadFile(dataFiles, id);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}
