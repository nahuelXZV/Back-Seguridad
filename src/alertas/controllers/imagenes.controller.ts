import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, ParseUUIDPipe, Query } from '@nestjs/common';
import { ImagenesService } from '../services/imagenes.service';
import { fileFilter } from 'src/files/helpers/fileFilter';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('imagenes')
export class ImagenesController {
  constructor(private readonly imagenesService: ImagenesService) { }

  @Post()
  @UseInterceptors(FileInterceptor('foto', {
    fileFilter: fileFilter,
  }))
  create(@UploadedFiles() foto: Express.Multer.File, @Query('alerta_id', ParseUUIDPipe) alerta_id: string): Promise<any> {
    return this.imagenesService.create(foto, alerta_id);
  }

  @Get()
  findAll() {
    return this.imagenesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagenesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagenesService.remove(id);
  }
}
