import { Body, Controller, Post, Get, Put, Delete, Param, UseGuards, ParseUUIDPipe, Patch, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger/dist';

import { RolesAccess } from 'src/auth/decorators/roles.decorator';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { UserDTO, UserUpdateDTO } from '../dto/';
import { UsersEntity } from '../entities/users.entity';
import { UsersService } from '../services/users.service';
import { PublicAccess } from 'src/auth/decorators';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@ApiTags('Users')
@Controller('users')
// @UseGuards(AuthGuard, RolesGuard)
export class UsersController {

    constructor(
        private readonly usersService: UsersService
    ) { }

    @RolesAccess('ADMINISTRADOR')
    @ApiBearerAuth()
    @Post()
    public async createUser(@Body() body: UserDTO): Promise<UsersEntity> {
        return await this.usersService.create(body);
    }

    @ApiBearerAuth()
    @ApiQuery({ name: 'limit', type: 'number', required: false })
    @ApiQuery({ name: 'offset', type: 'number', required: false })
    @Get()
    public async findAll(@Query() pagination: PaginationDto): Promise<UsersEntity[]> {
        return await this.usersService.findAll(pagination);
    }

    @ApiParam({ name: 'id', type: 'string' })
    @ApiBearerAuth()
    @Get(':id')
    public async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<UsersEntity> {
        return await this.usersService.findOne(id);
    }

    @ApiParam({ name: 'id', type: 'string' })
    @ApiBearerAuth()
    @Patch(':id')
    public async update(@Param('id', ParseUUIDPipe) id: string, @Body() body: UserUpdateDTO): Promise<UserUpdateDTO> {
        return await this.usersService.update(id, body);
    }

    @RolesAccess('ADMINISTRADOR')
    @ApiParam({ name: 'id', type: 'string' })
    @ApiBearerAuth()
    @Delete(':id')
    public async delete(@Param('id', ParseUUIDPipe) id: string): Promise<{}> {
        return await this.usersService.delete(id);
    }

}
