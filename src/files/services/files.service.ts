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
            const infractor = await this.infractorService.findOne(id);
            if (!infractor) throw new BadRequestException('El infractor no existe');
            const dataFiles = [];
            await Promise.all(fotos.map(async (foto) => {
                const originalname = foto.originalname.split('.')[0];
                const fileName = `${originalname}_${id}`;
                const path = await this.s3Service.uploadFile(foto, "usuarios/" + fileName);
                const data = {
                    dir: path.Location,
                    name: fileName,
                };
                dataFiles.push(data);
            }));
            return await this.infractorService.uploadFile(dataFiles, id);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}
