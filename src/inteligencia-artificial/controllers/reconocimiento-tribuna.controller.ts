import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ReconocimientoTribunaService } from '../services/reconocimiento-tribuna.service';
import { ApiBody } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter } from 'src/files/helpers/fileFilter';
import { CreateAlertaDto } from 'src/alertas/dto/create-alerta.dto';

@Controller('reconocimiento-tribuna')
export class ReconocimientoTribunaController {

    constructor(private reconocimientoTribunaService: ReconocimientoTribunaService) { }

    @ApiBody({
        isArray: true,
        required: true,
        description: 'Foto para reconocimiento de la tribuna',
        // type: File,
    })
    @Post()
    @UseInterceptors(FileInterceptor('foto', {
        fileFilter: fileFilter,
    }))
    reconocimientoTribuna(@UploadedFile() foto: Express.Multer.File, @Body() data: CreateAlertaDto) {
        return this.reconocimientoTribunaService.reconocimientoTribuna(foto, data);
    }

}
