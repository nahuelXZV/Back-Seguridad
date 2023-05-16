import { PartialType } from '@nestjs/mapped-types';
import { CreateSansionDto } from './create-sansion.dto';

export class UpdateSansionDto extends PartialType(CreateSansionDto) { }
