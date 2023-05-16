import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateEstadioDto {
    @ApiProperty({
        example: 'bernabeu',
        type: String,
        description: 'Nombre del estadio'
    })
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @ApiProperty({
        example: 'santa cruz',
        type: String,
        description: 'Nombre del departamento'
    })
    @IsNotEmpty()
    @IsString()
    departamento: string;

    @ApiProperty({
        example: 'santa cruz de la sierra',
        type: String,
        description: 'Nombre de la ciudad'
    })
    @IsNotEmpty()
    @IsString()
    ciudad: string;

    @ApiProperty({
        example: 'Calle 1 # 123',
        type: String,
        description: 'Nombre de la calle'
    })
    @IsNotEmpty()
    @IsString()
    direccion: string;
}
