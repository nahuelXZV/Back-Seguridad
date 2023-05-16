import { PartialType } from '@nestjs/mapped-types';
import { CreateInfractorDto } from './create-infractor.dto';

export class UpdateInfractorDto extends PartialType(CreateInfractorDto) { }