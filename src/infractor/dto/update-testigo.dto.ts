import { PartialType } from '@nestjs/mapped-types';
import { CreateTestigoDto } from './create-testigo.dto';

export class UpdateTestigoDto extends PartialType(CreateTestigoDto) { }
