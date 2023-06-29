import { PartialType } from '@nestjs/swagger';
import { CreateReconocimientoFacialDto } from './create-reconocimiento-facial.dto';

export class UpdateReconocimientoFacialDto extends PartialType(CreateReconocimientoFacialDto) {}
