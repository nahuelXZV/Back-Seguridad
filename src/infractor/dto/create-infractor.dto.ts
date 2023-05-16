import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { SEXO } from "src/constants";
import { CreateHuellaDto } from "./create-huella.dto";

export class CreateInfractorDto {

    @ApiProperty({
        example: 'John',
        type: String,
        description: 'Nombre del infractor'
    })
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @ApiProperty({
        example: 'Doe',
        type: String,
        description: 'Apellido del infractor'
    })
    @IsNotEmpty()
    @IsString()
    apellido: string;

    @ApiProperty({
        example: '12345678',
        type: String,
        description: 'Cédula de identidad del infractor'
    })
    @IsNotEmpty()
    @IsString()
    cedulaIdentidad: string;

    @ApiProperty({
        example: 'Venezolano',
        type: String,
        description: 'Nacionalidad del infractor'
    })
    @IsNotEmpty()
    @IsString()
    nacionalidad: string;

    @ApiProperty({
        example: '1990-01-01',
        type: Date,
        description: 'Fecha de nacimiento del infractor'
    })
    @IsNotEmpty()
    @IsString()
    fechaNacimiento: string;

    @ApiProperty({
        example: 'masculino',
        enum: SEXO,
        description: 'Sexo del infractor'
    })
    @IsNotEmpty()
    @IsEnum(SEXO)
    sexo: SEXO;

    @ApiProperty({
        example: 'Ninguno',
        type: String,
        description: 'Otros datos del infractor'
    })
    @IsNotEmpty()
    @IsString()
    otros: string;

    @ApiProperty({
        example: [{
            tipoHuella: 'indice_derecho',
            huella: '12345678'
        }],
        type: [CreateHuellaDto],
        description: 'Tipo de huella'
    })
    @IsNotEmpty()
    @IsArray()
    huellas: CreateHuellaDto[];
}
