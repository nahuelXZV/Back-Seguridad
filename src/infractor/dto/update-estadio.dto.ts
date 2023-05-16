import { PartialType } from '@nestjs/mapped-types';
import { CreateEstadioDto } from './create-estadio.dto';

export class UpdateEstadioDto extends PartialType(CreateEstadioDto) { }
