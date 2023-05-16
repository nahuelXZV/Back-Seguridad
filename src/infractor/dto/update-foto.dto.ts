import { PartialType } from '@nestjs/mapped-types';
import { CreateFotoDto } from './create-Foto.dto';

export class UpdateFotoDto extends PartialType(CreateFotoDto) { }
