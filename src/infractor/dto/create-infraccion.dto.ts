import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateInfraccionDto {
    @ApiProperty({
        example: '10/10/2023',
        type: String,
        description: 'Fecha de la infraccion'
    })
    @IsNotEmpty()
    @IsString()
    fecha: string;

    @ApiProperty({
        example: '10:00',
        type: String,
        description: 'Hora de la infraccion'
    })
    @IsNotEmpty()
    @IsString()
    hora: string;

    @ApiProperty({
        example: 'seccion 1',
        type: String,
        description: 'Seccion en el estadio de la infraccion'
    })
    @IsNotEmpty()
    @IsString()
    seccion: string;

    @ApiProperty({
        example: 'fila 1',
        type: String,
        description: 'Fila en el estadio de la infraccion'
    })
    @IsNotEmpty()
    @IsString()
    fila: string;

    @ApiProperty({
        example: 'asiento 1',
        type: String,
        description: 'Asiento en el estadio de la infraccion'
    })
    @IsNotEmpty()
    @IsString()
    asiento: string;

    @ApiProperty({
        example: 'El infractor se encontraba en estado de ebriedad',
        type: String,
        description: 'Descripcion de la infraccion'
    })
    @IsNotEmpty()
    @IsString()
    descripcion: string;

    @ApiProperty({
        example: 'En proceso',
        type: String,
        description: 'Estado de la infraccion'
    })
    @IsNotEmpty()
    @IsString()
    estado: string;

    @ApiProperty({
        example: ' ',
        type: String,
        description: 'Id del infractor'
    })
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    infractor: string;

    @ApiProperty({
        example: ' ',
        type: String,
        description: 'Id del usuario creador de la infraccion'
    })
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    creador: string;

    @ApiProperty({
        example: ' ',
        type: String,
        description: 'Id del estadio de la infraccion'
    })
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    estadio: string;
}