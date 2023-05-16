import { Module } from '@nestjs/common';
import { FilesController } from './controllers/files.controller';
import { FilesService } from './services/files.service';
import { InfractorModule } from 'src/infractor/infractor.module';

@Module({
  controllers: [FilesController],
  providers: [FilesService],
  imports: [
    InfractorModule,
  ],
})
export class FilesModule {}
