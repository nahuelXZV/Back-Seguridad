import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateSansionDto {
    @ApiProperty({
        example: 'Penalizacion',
        type: String,
        description: 'Nombre de la sansion'
    })
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @ApiProperty({
        example: '8 meses',
        type: String,
        description: 'Tiempo de la sansion'
    })
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    tiempo: string;

    @ApiProperty({
        example: 'activo',
        type: String,
        description: 'Estado de la sansion'
    })
    @IsNotEmpty()
    @IsString()
    estado: string;

    @ApiProperty({
        example: '10/10/2023',
        type: String,
        description: 'Fecha de inicio de la sansion'
    })
    @IsNotEmpty()
    @IsString()
    fechaInicio: string;

    @ApiProperty({
        example: 'Prohibido el ingreso al estadio',
        type: String,
        description: 'Descripcion de la sansion'
    })
    @IsNotEmpty()
    @IsString()
    descripcion: string;

    @ApiProperty({
        example: ' ',
        type: String,
        description: 'Id de la infraccion'
    })
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    infraccion: string;
}
