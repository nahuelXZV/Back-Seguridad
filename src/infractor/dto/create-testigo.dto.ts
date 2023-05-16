import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";
import { SEXO } from "src/constants";

export class CreateTestigoDto {

    @ApiProperty({
        example: 'Lucas',
        type: String,
        description: 'Nombre del testigo'
    })
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @ApiProperty({
        example: 'Mendoza',
        type: String,
        description: 'Apellido del testigo'
    })
    @IsNotEmpty()
    @IsString()
    apellido: string;

    @ApiProperty({
        example: '+591 12345678',
        type: String,
        description: 'Telefono del testigo'
    })
    @IsNotEmpty()
    @IsString()
    telefono: string;

    @ApiProperty({
        example: '12345678',
        type: String,
        description: 'Cedula de identidad del testigo'
    })
    @IsNotEmpty()
    @IsString()
    cedulaIdentidad: string;

    @ApiProperty({
        example: 'argentina',
        type: String,
        description: 'Nacionalidad del testigo'
    })
    @IsNotEmpty()
    @IsString()
    nacionalidad: string;

    @ApiProperty({
        example: 'masculino',
        enum: SEXO,
        description: 'Sexo del testigo'
    })
    @IsEnum(SEXO)
    sexo: SEXO;

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
