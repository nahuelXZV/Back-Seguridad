import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { EstadioService } from '../services/estadio.service';
import { CreateEstadioDto, UpdateEstadioDto } from '../dto';
import { ApiBearerAuth, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { RolesAccess } from 'src/auth/decorators';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@ApiTags('Estadio')
// @UseGuards(AuthGuard, RolesGuard)
@Controller('estadio')
export class EstadioController {

    constructor(private readonly estadioService: EstadioService) { }

    @ApiBearerAuth()
    @RolesAccess('ADMIN')
    @Post()
    create(@Body() createEstadioDto: CreateEstadioDto) {
        return this.estadioService.create(createEstadioDto);
    }

    @ApiBearerAuth()
    @ApiQuery({ name: 'limit', type: 'number', required: false })
    @ApiQuery({ name: 'offset', type: 'number', required: false })
    @RolesAccess('ADMIN')
    @Get()
    findAll(@Query() paginationDto: PaginationDto) {
        return this.estadioService.findAll(paginationDto);
    }

    @ApiBearerAuth()
    @ApiParam({ name: 'id', type: 'string' })
    @RolesAccess('ADMIN')
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.estadioService.findOne(id);
    }

    @ApiBearerAuth()
    @ApiParam({ name: 'id', type: 'string' })
    @RolesAccess('ADMIN')
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateEstadioDto: UpdateEstadioDto) {
        return this.estadioService.update(id, updateEstadioDto);
    }

    @RolesAccess('ADMIN')
    @ApiBearerAuth()
    @ApiParam({ name: 'id', type: 'string' })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.estadioService.remove(id);
    }
}
