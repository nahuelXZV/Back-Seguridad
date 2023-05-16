import { BadRequestException, Injectable } from '@nestjs/common';
import { InfractorService } from 'src/infractor/services/infractor.service';
import { existsSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FilesService {

    constructor(
        private readonly infractorService: InfractorService,
    ) { }

    async uploadFile(fotos: Array<Express.Multer.File>, id: string): Promise<any> {
        try {
            const dataFiles = [];
            fotos.forEach((foto) => {
                const fileExtension = foto.mimetype.split('/')[1];
                const originalname = foto.originalname.split('.')[0];
                const fileName = `${id}_${originalname}.${fileExtension}`;
                const path = `${process.env.APP_URL}/api/files/images/${fileName}`;
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

    getStaticFile(imageName: string) {
        const path = join(__dirname, 'files', '..', '..', '..', '..', 'files', 'infractors', imageName);
        if (!existsSync(path)) throw new BadRequestException('File not found');
        return path;
    }

}
