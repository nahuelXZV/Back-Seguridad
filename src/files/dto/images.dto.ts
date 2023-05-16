import { ApiProperty } from "@nestjs/swagger";

export class ImageDto {
    @ApiProperty({ type: Array<Express.Multer.File>, format: 'binary', description: 'Array con las imagenes a subir'})
    fotos: Express.Multer.File[];
}