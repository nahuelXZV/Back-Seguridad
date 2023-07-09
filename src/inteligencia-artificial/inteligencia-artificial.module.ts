import { Module } from '@nestjs/common';
import { ReconocimientoTribunaController } from './controllers/reconocimiento-tribuna.controller';
import { ReconocimientoTribunaService } from './services/reconocimiento-tribuna.service';
import { ReconocimientoFacialController } from './controllers/reconocimiento-facial.controller';
import { ReconocimientoFacialService } from './services/reconocimiento-facial.service';
import { ProvidersModule } from 'src/providers/providers.module';
import { InfractorModule } from 'src/infractor/infractor.module';
import { AlertasModule } from 'src/alertas/alertas.module';

@Module({
  imports: [ProvidersModule, InfractorModule, AlertasModule],
  controllers: [ReconocimientoFacialController, ReconocimientoTribunaController],
  providers: [ReconocimientoFacialService, ReconocimientoTribunaService]
})
export class InteligenciaArtificialModule { }
