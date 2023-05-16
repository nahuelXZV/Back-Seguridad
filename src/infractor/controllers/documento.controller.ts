import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Documentos')
// @UseGuards(AuthGuard, RolesGuard)
@Controller('documento')
export class DocumentoController {}
