import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateAlertaDto } from '../dto/create-alerta.dto';
import { UpdateAlertaDto } from '../dto/update-alerta.dto';
import { Alerta } from '../entities/alerta.entity';

@Injectable()
export class AlertaService {

  private readonly logger = new Logger('AlertaService');

  constructor(
    @InjectRepository(Alerta) private readonly alertaRepository: Repository<Alerta>,
  ) { }

  async create(createAlertaDto: CreateAlertaDto) {
    try {
      const alerta = this.alertaRepository.create(createAlertaDto);
      return await this.alertaRepository.save(alerta);
    } catch (error) {
      this.handlerError(error);
    }
  }

  async findAll() {
    try {
      return await this.alertaRepository.find({
        relations: ['imagenes', 'infractores']
      });
    } catch (error) {
      this.handlerError(error);
    }
  }

  async findOne(id: string) {
    try {
      const alerta = await this.alertaRepository.findOne({ where: { id }, relations: ['imagenes', 'infractores'] });
      if (!alerta) throw new BadRequestException(`La alerta con id: ${id} no existe`);
      return alerta;
    } catch (error) {
      this.handlerError(error);
    }
  }

  async update(id: string, updateAlertaDto: UpdateAlertaDto) {
    try {
      const alerta = await this.findOne(id);
      await this.alertaRepository.update(alerta.id, { ...updateAlertaDto });
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
