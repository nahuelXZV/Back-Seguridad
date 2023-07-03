import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InfractorService } from 'src/infractor/services/infractor.service';

@Injectable()
export class ReconocimientoTribunaService {

    private readonly logger = new Logger('ReconocimientoTribunaService');

    constructor(
        //   private readonly recoknitionService: RecoknitionService,
        private readonly infractorService: InfractorService
    ) { }

    async reconocimientoTribuna(foto: Express.Multer.File) {
        try {
            // Logica


        } catch (error) {
            this.handlerError(error);
        }
    }

    handlerError(error: any) {
        this.logger.error(error.message);
        if (error.code === '23505') throw new BadRequestException(error.detail);
        throw new InternalServerErrorException(error.message);
    }
}
