import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsUrl } from "class-validator";
import { FOTOS } from "src/constants";

export class CreateFotoDto {
    @ApiProperty({
        example: 'perfil',
        enum: FOTOS,
        description: 'Foto del infractor'
    })
    @IsNotEmpty()
    @IsEnum(FOTOS)
    tipoFoto: FOTOS;


    @ApiProperty({
        example: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        type: String,
        description: 'URL de la foto del infractor'
    })
    @IsNotEmpty()
    @IsUrl()
    dir: string;
}
