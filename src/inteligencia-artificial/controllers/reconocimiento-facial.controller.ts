import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ReconocimientoFacialService } from '../services/reconocimiento-facial.service';
import { fileFilter } from 'src/files/helpers/fileFilter';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Reconocimiento Facial')
@Controller('reconocimiento-facial')
export class ReconocimientoFacialController {
  constructor(private readonly reconocimientoFacialService: ReconocimientoFacialService) { }

  @ApiBody({
    isArray: true,
    required: true,
    description: 'Foto para reconocimiento facial',
    // type: File,
  })
  @Post()
  @UseInterceptors(FileInterceptor('foto', {
    fileFilter: fileFilter,
  }))
  reconocimientoFacial(@UploadedFile() foto: Express.Multer.File) {
    return this.reconocimientoFacialService.reconocimientoFacial(foto);
  }

}
