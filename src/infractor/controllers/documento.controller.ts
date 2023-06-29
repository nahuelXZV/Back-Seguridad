import { Body, Controller, Delete, ParseUUIDPipe, Post, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { DocumentoService } from '../services/documento.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { fileFilter } from 'src/files/helpers/fileFilter';
import { ImageDto } from 'src/files/dto/images.dto';
import { CreateDocumentoDto } from '../dto/create-documento.dto';

@ApiTags('Documentos')
// @UseGuards(AuthGuard, RolesGuard)
@Controller('documento')
export class DocumentoController {

    constructor(
        private readonly documentoService: DocumentoService,
    ) { }

    @ApiQuery({ name: 'infraccion_id', type: 'uuid', required: true, description: 'Id de la infraccion' })
    @ApiBody({
        isArray: true,
        required: true,
        type: ImageDto,
        description: 'Array con los documentos a subir',
        schema: {
            type: 'object',
            properties: {
                documentos: {
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
    @UseInterceptors(FilesInterceptor('documentos', 10, {
        fileFilter: fileFilter,
    }))
    uploadFile(@UploadedFiles() documentos: Array<Express.Multer.File>, @Body() createDocumentoDto: CreateDocumentoDto): Promise<any> {
        return this.documentoService.uploadFile(documentos, createDocumentoDto);
    }


    @ApiQuery({ name: 'documento_id', type: 'uuid', required: true, description: 'Id del documento' })
    @Delete()
    deleteFile(@Query('documento_id', ParseUUIDPipe) documento_id: string): Promise<any> {
        return this.documentoService.deleteFile(documento_id);
    }


}
