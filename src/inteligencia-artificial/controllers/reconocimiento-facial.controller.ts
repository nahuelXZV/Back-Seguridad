import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ReconocimientoFacialService } from '../services/reconocimiento-facial.service';
import { fileFilter } from 'src/files/helpers/fileFilter';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody } from '@nestjs/swagger';

@Controller('reconocimiento-facial')
export class ReconocimientoFacialController {
  constructor(private readonly reconocimientoFacialService: ReconocimientoFacialService) { }

  @ApiBody({
    isArray: true,
    required: true,
    description: 'Foto para reconocimiento facial',
  })
  @Post()
  @UseInterceptors(FileInterceptor('foto', {
    fileFilter: fileFilter,
  }))
  reconocimientoFacial(@UploadedFile() foto: Express.Multer.File) {
    return this.reconocimientoFacialService.reconocimientoFacial(foto);
  }


}
