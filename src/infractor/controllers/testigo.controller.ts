import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { TestigoService } from '../services/testigo.service';
import { CreateTestigoDto, UpdateTestigoDto } from '../dto';
import { RolesAccess } from 'src/auth/decorators';
import { PaginationDto } from 'src/common/dto/pagination.dto';


@ApiTags('Testigo')
// @UseGuards(AuthGuard, RolesGuard)
@Controller('testigo')
export class TestigoController {

    constructor(private readonly testigoService: TestigoService) { }

    @ApiBearerAuth()
    @RolesAccess('ADMINISTRADOR')
    @Post()
    create(@Body() createTestigoDto: CreateTestigoDto) {
        return this.testigoService.create(createTestigoDto);
    }

    @ApiBearerAuth()
    @ApiQuery({ name: 'limit', type: 'number', required: false })
    @ApiQuery({ name: 'offset', type: 'number', required: false })
    @RolesAccess('ADMINISTRADOR')
    @Get()
    findAll(@Query() paginationDto: PaginationDto) {
        return this.testigoService.findAll(paginationDto);
    }

    @ApiBearerAuth()
    @ApiParam({ name: 'id', type: 'string' })
    @RolesAccess('ADMINISTRADOR')
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.testigoService.findOne(id);
    }

    @ApiBearerAuth()
    @ApiParam({ name: 'id', type: 'string' })
    @RolesAccess('ADMINISTRADOR')
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateTestigoDto: UpdateTestigoDto) {
        return this.testigoService.update(id, updateTestigoDto);
    }

    @RolesAccess('ADMINISTRADOR')
    @ApiBearerAuth()
    @ApiParam({ name: 'id', type: 'string' })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.testigoService.remove(id);
    }
}
