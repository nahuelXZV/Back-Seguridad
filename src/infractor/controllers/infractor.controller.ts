import { Body, Controller, Post, Get, Put, Delete, Param, UseGuards, Patch, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger/dist';

import { RolesAccess } from 'src/auth/decorators/roles.decorator';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { InfractorEntity } from '../entitites/infractor.entity';
import { InfractorService } from '../services/infractor.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateInfractorDto, UpdateInfractorDto } from '../dto';
import { PublicAccess } from 'src/auth/decorators';

@ApiTags('Infractores')
// @UseGuards(AuthGuard, RolesGuard)
@Controller('infractor')
export class InfractorController {

    constructor(
        private readonly infractorService: InfractorService
    ) { }

    @PublicAccess()
    @ApiBearerAuth()
    @RolesAccess('ADMINISTRADOR')
    @Post()
    public async create(@Body() createInfractorDto: CreateInfractorDto): Promise<InfractorEntity> {
        return await this.infractorService.create(createInfractorDto);
    }

    @ApiBearerAuth()
    @ApiQuery({ name: 'limit', type: 'number', required: false })
    @ApiQuery({ name: 'offset', type: 'number', required: false })
    @RolesAccess('ADMINISTRADOR')
    @Get()
    public async findAll(@Query() paginationDto: PaginationDto): Promise<InfractorEntity[]> {
        return await this.infractorService.findAll(paginationDto);
    }

    @ApiBearerAuth()
    @ApiParam({ name: 'id', type: 'string' })
    @RolesAccess('ADMINISTRADOR')
    @Get(':id')
    public async findOne(@Param('id') id: string): Promise<InfractorEntity> {
        return await this.infractorService.findOne(id);
    }

    @ApiBearerAuth()
    @ApiParam({ name: 'id', type: 'string' })
    @RolesAccess('ADMINISTRADOR')
    @Patch(':id')
    public async update(@Param('id') id: string, @Body() updateInfractorDto: UpdateInfractorDto): Promise<InfractorEntity> {
        return await this.infractorService.update(id, updateInfractorDto);
    }

    @RolesAccess('ADMINISTRADOR')
    @ApiBearerAuth()
    @ApiParam({ name: 'id', type: 'string' })
    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<{}> {
        return this.infractorService.delete(id);
    }


}
