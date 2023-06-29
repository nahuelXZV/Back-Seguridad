import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { InfraccionService } from '../services/infraccion.service';
import { ApiBearerAuth, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { RolesAccess } from 'src/auth/decorators';
import { CreateInfraccionDto, UpdateInfraccionDto } from '../dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';


@ApiTags('Infraccion')
// @UseGuards(AuthGuard, RolesGuard)
@Controller('infraccion')
export class InfraccionController {

    constructor(private readonly infraccionService: InfraccionService) { }

    @ApiBearerAuth()
    @RolesAccess('ADMINISTRADOR')
    @Post()
    create(@Body() createInfraccionDto: CreateInfraccionDto) {
        return this.infraccionService.create(createInfraccionDto);
    }

    @ApiBearerAuth()
    @ApiQuery({ name: 'limit', type: 'number', required: false })
    @ApiQuery({ name: 'offset', type: 'number', required: false })
    @RolesAccess('ADMINISTRADOR')
    @Get()
    findAll(@Query() paginationDto: PaginationDto) {
        return this.infraccionService.findAll(paginationDto);
    }

    @ApiBearerAuth()
    @ApiParam({ name: 'id', type: 'string' })
    @RolesAccess('ADMINISTRADOR')
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.infraccionService.findOne(id);
    }

    @ApiBearerAuth()
    @ApiParam({ name: 'id', type: 'string' })
    @RolesAccess('ADMINISTRADOR')
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateInfraccionDto: UpdateInfraccionDto) {
        return this.infraccionService.update(id, updateInfraccionDto);
    }

    @RolesAccess('ADMINISTRADOR')
    @ApiBearerAuth()
    @ApiParam({ name: 'id', type: 'string' })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.infraccionService.remove(id);
    }
}
