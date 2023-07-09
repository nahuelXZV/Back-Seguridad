import { Module } from '@nestjs/common';
import { AlertaService } from './services/alerta.service';
import { ImagenesService } from './services/imagenes.service';
import { ImagenesController } from './controllers/imagenes.controller';
import { AlertaController } from './controllers/alerta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfractorAlertaEntity } from './entities/infractor_alerta.entity';
import { Alerta } from './entities/alerta.entity';
import { Imagene } from './entities/imagene.entity';
import { InfractorModule } from 'src/infractor/infractor.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Alerta,
      Imagene,
      InfractorAlertaEntity,
    ]),
    InfractorModule
  ],
  providers: [AlertaService, ImagenesService],
  controllers: [AlertaController, ImagenesController],
  exports: [AlertaService, ImagenesService]
})
export class AlertasModule { }
