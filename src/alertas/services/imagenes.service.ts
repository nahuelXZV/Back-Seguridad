import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateImageneDto } from '../dto/create-imagene.dto';
import { UpdateImageneDto } from '../dto/update-imagene.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Imagene } from '../entities/imagene.entity';
import { Repository } from 'typeorm';
import { S3Service } from 'src/providers/s3/s3.service';
import { AlertaService } from './alerta.service';

@Injectable()
export class ImagenesService {

  constructor(
    @InjectRepository(Imagene) private readonly imageneRepository: Repository<Imagene>,
    private alertaService: AlertaService,
    private readonly s3Service: S3Service
  ) { }

  async create(foto: Express.Multer.File, id: string): Promise<any> {
    try {
      const alerta = await this.alertaService.findOne(id);
      if (!alerta) throw new BadRequestException('Alerta no existe');
      const originalname = foto.originalname.split('.')[0];
      const fileName = `${originalname}_${id}`;
      const path = await this.s3Service.uploadFile(foto, "alertas/" + fileName);
      const fotoInfractor: Imagene = new Imagene();
      fotoInfractor.dir = path.Location;
      fotoInfractor.alerta = alerta;
      fotoInfractor.nombre = fileName;
      fotoInfractor.tipo = foto.mimetype;
      await this.imageneRepository.save(fotoInfractor);
      return { message: 'Fotos subidas correctamente' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      return await this.imageneRepository.find();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const imagen = await this.imageneRepository.findOne({ where: { id } });
      if (!imagen) throw new BadRequestException('La imagen no existe');
      return imagen;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const imagen = await this.findOne(id);
      if (!imagen) throw new BadRequestException('La imagen no existe');
      await this.imageneRepository.delete(id);
      return { message: 'Imagen eliminada correctamente' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
