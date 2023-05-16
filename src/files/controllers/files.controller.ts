import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors, Res, ParseUUIDPipe, Query, UploadedFiles } from '@nestjs/common';
import { FilesService } from '../services/files.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { fileFilter } from '../helpers/fileFilter';
import { diskStorage } from 'multer';
import { fileNamer } from '../helpers/saveNamer';
import { Response } from 'express';
import { ApiBody, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ImageDto } from '../dto/images.dto';

@ApiTags('Imagenes')
@Controller('files')
export class FilesController {

    constructor(
        private readonly filesService: FilesService,
    ) { }

    @ApiQuery({ name: 'infractor_id', type: 'uuid', required: true, description: 'Id del infractor' })
    @ApiBody({
        isArray: true,
        required: true,
        type: ImageDto,
        description: 'Array con las imagenes a subir',
        schema: {
            type: 'object',
            properties: {
                fotos: {
                    type: 'array',
                    items: {
                        type: 'string',
                        format: 'binary',
                    },
                },
            },
        },
    })
    @Post()
    @UseInterceptors(FilesInterceptor('fotos', 10, {
        fileFilter: fileFilter,
        storage: diskStorage({
            destination: './files/infractors',
            filename: fileNamer,
        })
    }))
    uploadFile(@UploadedFiles() fotos: Array<Express.Multer.File>, @Query('infractor_id', ParseUUIDPipe) infractor_id: string): Promise<any> {
        return this.filesService.uploadFile(fotos, infractor_id);
    }

    @ApiParam({ name: 'imageName', type: 'string', required: true, description: 'nombre de la imagen' })
    @Get('images/:imageName')
    findOne(@Res() res: Response, @Param('imageName') imageName: string) {
        const path = this.filesService.getStaticFile(imageName);
        res.sendFile(path);
    }
}
