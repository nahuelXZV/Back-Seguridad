import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { SansionService } from '../services/sansion.service';
import { CreateSansionDto, UpdateSansionDto } from '../dto';
import { ApiBearerAuth, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { RolesAccess } from 'src/auth/decorators';
import { PaginationDto } from 'src/common/dto/pagination.dto';


@ApiTags('Sansion')
// @UseGuards(AuthGuard, RolesGuard)
@Controller('sansion')
export class SancionController {
    constructor(private readonly sansionService: SansionService) { }

    @ApiBearerAuth()
    @RolesAccess('ADMINISTRADOR')
    @Post()
    create(@Body() createSansionDto: CreateSansionDto) {
        return this.sansionService.create(createSansionDto);
    }

    @ApiBearerAuth()
    @ApiQuery({ name: 'limit', type: 'number', required: false })
    @ApiQuery({ name: 'offset', type: 'number', required: false })
    @RolesAccess('ADMINISTRADOR')
    @Get()
    findAll(@Query() paginationDto: PaginationDto) {
        return this.sansionService.findAll(paginationDto);
    }

    @ApiBearerAuth()
    @ApiParam({ name: 'id', type: 'string' })
    @RolesAccess('ADMINISTRADOR')
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.sansionService.findOne(id);
    }

    @ApiBearerAuth()
    @ApiParam({ name: 'id', type: 'string' })
    @RolesAccess('ADMINISTRADOR')
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateSansionDto: UpdateSansionDto) {
        return this.sansionService.update(id, updateSansionDto);
    }

    @RolesAccess('ADMINISTRADOR')
    @ApiBearerAuth()
    @ApiParam({ name: 'id', type: 'string' })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.sansionService.remove(id);
    }
}
