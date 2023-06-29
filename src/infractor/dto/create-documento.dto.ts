import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateDocumentoDto {

    @ApiProperty({
        example: 'DSAAZSD',
        description: 'id de la infraccion'
    })
    @IsNotEmpty()
    @IsUUID()
    @IsString()
    infraccion: string;


    @ApiProperty({
        example: 'example',
        description: 'descripcion del documento'
    })
    @IsNotEmpty()
    @IsString()
    descripcion: string;

}
