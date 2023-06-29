import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { RolesAccess } from 'src/auth/decorators';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateEstadioDto, UpdateEstadioDto } from 'src/infractor/dto';
import { EstadioService } from 'src/infractor/services/estadio.service';

@Controller('example')
export class ExampleController {
  constructor(private readonly estadioService: EstadioService) { }

  @ApiBearerAuth()
  @RolesAccess('ADMINISTRADOR')
  @Post()
  create(@Body() createEstadioDto: CreateEstadioDto) {
    return this.estadioService.create(createEstadioDto);
  }

  @ApiBearerAuth()
  @ApiQuery({ name: 'limit', type: 'number', required: false })
  @ApiQuery({ name: 'offset', type: 'number', required: false })
  @RolesAccess('ADMINISTRADOR')
  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.estadioService.findAll(paginationDto);
  }

  @ApiBearerAuth()
  @ApiParam({ name: 'id', type: 'string' })
  @RolesAccess('ADMINISTRADOR')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadioService.findOne(id);
  }

  @ApiBearerAuth()
  @ApiParam({ name: 'id', type: 'string' })
  @RolesAccess('ADMINISTRADOR')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstadioDto: UpdateEstadioDto) {
    return this.estadioService.update(id, updateEstadioDto);
  }

  @RolesAccess('ADMINISTRADOR')
  @ApiBearerAuth()
  @ApiParam({ name: 'id', type: 'string' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadioService.remove(id);
  }
}
