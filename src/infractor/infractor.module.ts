import { Module } from '@nestjs/common';
import { InfractorService } from './services/infractor.service';
import { InfractorController } from './controllers/infractor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfractorEntity } from './entitites/infractor.entity';
import { FotoEntity } from './entitites/foto.entity';
import { HuellaEntity } from './entitites/huella.entity';
import { InfraccionService } from './services/infraccion.service';
import { EstadioService } from './services/estadio.service';
import { SansionService } from './services/sansion.service';
import { SancionController } from './controllers/sancion.controller';
import { EstadioController } from './controllers/estadio.controller';
import { InfraccionController } from './controllers/infraccion.controller';
import { InfraccionEntity } from './entitites/infraccion.entity';
import { DocumentoEntity } from './entitites/documento.entity';
import { EstadioEntity } from './entitites/estadio.entity';
import { SansionEntity } from './entitites/sansion.entity';
import { TestigoEntity } from './entitites/testigo.entity';
import { TestigoController } from './controllers/testigo.controller';
import { DocumentoController } from './controllers/documento.controller';
import { TestigoService } from './services/testigo.service';
import { DocumentoService } from './services/documento.service';
import { ProvidersModule } from 'src/providers/providers.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([InfractorEntity, FotoEntity, HuellaEntity, InfraccionEntity, DocumentoEntity, EstadioEntity, SansionEntity, TestigoEntity]),
    ProvidersModule
  ],
  providers: [InfractorService, InfraccionService, EstadioService, SansionService, TestigoService, DocumentoService],
  controllers: [InfractorController, SancionController, EstadioController, InfraccionController, TestigoController, DocumentoController],
  exports: [InfractorService, TypeOrmModule]
})
export class InfractorModule { }
