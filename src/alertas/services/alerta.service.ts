import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateAlertaDto } from '../dto/create-alerta.dto';
import { UpdateAlertaDto } from '../dto/update-alerta.dto';
import { Alerta } from '../entities/alerta.entity';
import { InfractorAlertaEntity } from '../entities/infractor_alerta.entity';
import { InfractorService } from 'src/infractor/services/infractor.service';
import { InfractorEntity } from 'src/infractor/entitites/infractor.entity';

@Injectable()
export class AlertaService {

  private readonly logger = new Logger('AlertaService');

  constructor(
    @InjectRepository(Alerta) private readonly alertaRepository: Repository<Alerta>,
    @InjectRepository(InfractorAlertaEntity) private readonly infractorAlertaRepository: Repository<InfractorAlertaEntity>,
    private readonly infractorService: InfractorService
  ) { }

  async create(createAlertaDto: CreateAlertaDto) {
    try {
      const { infractores, ...rest } = createAlertaDto;
      const alerta = this.alertaRepository.create(rest);
      await this.alertaRepository.save(alerta);
      if (infractores?.length == 0) return alerta;
      infractores.forEach(async infractorID => {
        const infractorDB: InfractorEntity = await this.infractorService.findOne(infractorID);
        console.log(infractorDB);
        if (!infractorDB) return;
        const infractorAlerta = this.infractorAlertaRepository.create({ alerta, infractor: infractorDB });
        console.log(infractorAlerta);
        await this.infractorAlertaRepository.save(infractorAlerta);
      });
      return alerta;
    } catch (error) {
      this.handlerError(error);
    }
  }

  async findAll() {
    try {
      return await this.alertaRepository.find({
        relations: ['imagenes', 'infractores', 'infractores.infractor']
      });
    } catch (error) {
      this.handlerError(error);
    }
  }

  async findOne(id: string) {
    try {
      const alerta = await this.alertaRepository.findOne({ where: { id }, relations: ['imagenes', 'infractores', 'infractores.infractor'] });
      if (!alerta) throw new BadRequestException(`La alerta con id: ${id} no existe`);
      return alerta;
    } catch (error) {
      this.handlerError(error);
    }
  }

  async update(id: string, updateAlertaDto: UpdateAlertaDto) {
    try {
      const { infractores, ...rest } = updateAlertaDto;
      const alerta = await this.findOne(id);
      await this.alertaRepository.update(alerta.id, { ...rest });
      return await this.findOne(id);
    } catch (error) {
      this.handlerError(error);
    }
  }

  async remove(id: string) {
    try {
      const alerta = await this.findOne(id);
      const alertaDeleted = await this.alertaRepository.delete(alerta.id);
      return alertaDeleted;
    } catch (error) {
      this.handlerError(error);
    }
  }

  handlerError(error: any) {
    this.logger.error(error.message);
    if (error.code === '23505') throw new BadRequestException(error.detail);
    throw new InternalServerErrorException(error.message);
  }
}
