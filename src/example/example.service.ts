import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class ExampleService {
  private readonly logger = new Logger('EstadioService');
  constructor(
    // @InjectRepository(EstadioEntity) private readonly estadioRepository: Repository<EstadioEntity>,
  ) { }

  public async create(createEstadioDto: CreateExampleDto) {
    try {

    } catch (error) {
      this.handlerError(error);
    }
  }

  public async findAll(paginationDto: PaginationDto) {
    try {

    } catch (error) {
      this.handlerError(error);
    }
  }

  public async findOne(id: string) {
    try {

    } catch (error) {
      this.handlerError(error);
    }
  }

  public async update(id: string, updateEstadioDto: UpdateExampleDto) {
    try {

    } catch (error) {
      this.handlerError(error);
    }
  }

  public async remove(id: string) {
    try {

    } catch (error) {
      this.handlerError(error);
    }
  }

  handlerError(error: any) {
    this.logger.error(error.message);
    if (error.code === '23505') throw new BadRequestException(error.detail);
    throw new InternalServerErrorException(error.message);
  }
}
