import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { S3Service } from 'src/providers/s3/s3.service';
import { DocumentoEntity } from '../entitites/documento.entity';
import { Repository } from 'typeorm';
import { InfraccionService } from './infraccion.service';
import { CreateDocumentoDto } from '../dto/create-documento.dto';

@Injectable()
export class DocumentoService {

    constructor(
        private readonly s3Service: S3Service,
        private readonly infraccionService: InfraccionService,
        @InjectRepository(DocumentoEntity) private readonly documentoRepository: Repository<DocumentoEntity>,
    ) { }

    async uploadFile(documentos: Array<Express.Multer.File>, createDocumentoDto: CreateDocumentoDto): Promise<any> {
        try {
            const { infraccion, descripcion } = createDocumentoDto;
            const infraccionDB = await this.infraccionService.findOne(infraccion);
            if (!infraccionDB) throw new BadRequestException("Infraccion no existe");

            await Promise.all(documentos.map(async (doc) => {
                console.log(doc);
                const originalname = doc.originalname.split('.')[0];
                const fileName = `${originalname}_${infraccionDB.id}`;
                const path = await this.s3Service.uploadFile(doc, "infracciones/documentos" + fileName);
                const documento = this.documentoRepository.create({
                    infraccion: infraccionDB,
                    dir: path.Location,
                    nombre: originalname,
                    descripcion: descripcion,
                    tipo: doc.mimetype,
                });
                await this.documentoRepository.save(documento);
            }));
            return { message: "Documentos subidos correctamente" };
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async deleteFile(documento_id: string): Promise<any> {
        try {
            const documento = await this.documentoRepository.findOne({ where: { id: documento_id } });
            if (!documento) throw new BadRequestException("Documento no existe");
            // await this.s3Service.deleteFile(documento.dir);
            await this.documentoRepository.delete(documento_id);
            return { message: "Documento eliminado correctamente" };
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

}
