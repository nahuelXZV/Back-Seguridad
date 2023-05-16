import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { HUELLAS } from "src/constants";

export class CreateHuellaDto {
    @ApiProperty({
        example: 'huella_derecha',
        enum: HUELLAS,
        description: 'Tipo de huella'
    })
    @IsNotEmpty()
    @IsEnum(HUELLAS)
    tipoHuella: HUELLAS;


    @ApiProperty({
        example: '12345678',
        type: String,
        description: 'Huella del infractor'
    })
    @IsNotEmpty()
    @IsString()
    huella: string;
}
