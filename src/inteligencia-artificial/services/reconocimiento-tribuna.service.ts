import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateAlertaDto } from 'src/alertas/dto/create-alerta.dto';
import { AlertaService } from 'src/alertas/services/alerta.service';
import { ImagenesService } from 'src/alertas/services/imagenes.service';
import { RecoknitionService } from 'src/providers/recoknition/recoknition.service';

@Injectable()
export class ReconocimientoTribunaService {

    private readonly logger = new Logger('ReconocimientoTribunaService');

    constructor(
        private readonly recoknitionService: RecoknitionService,
        private readonly alertaService: AlertaService,
        private readonly imagenService: ImagenesService,
    ) { }

    async reconocimientoTribuna(foto: Express.Multer.File, data: CreateAlertaDto) {
        try {
            // Mandar a la IA y recibir un array de infractores
            const infractores = await this.reconocimientoFacial(foto);

            // Crear la alerta
            const alerta = await this.alertaService.create({ ...data, infractores: infractores });
            if (!alerta) return undefined;

            // Subir la imagen
            const imagen = await this.imagenService.create(foto, alerta.id);
            if (!imagen) return undefined;

            // retornar la alerta
            return this.alertaService.findOne(alerta.id);
        } catch (error) {
            this.handlerError(error);
        }
    }

    public async reconocimientoFacial(foto: Express.Multer.File): Promise<string[]> {
        try {
            const fotos = await this.recoknitionService.searchEventosUsuariosFaces(foto);
            const usuariosId = this.getUsers(fotos);
            console.log(usuariosId);
            if (usuariosId.length === 0) return [];
            return usuariosId;
        } catch (error) {
            this.handlerError(error);
        }
    }

    extraerUUID(cadena: string) {
        const regex = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}/i; // La expresión regular busca un UUID
        const match = cadena.match(regex); // Busca la primera coincidencia
        if (match) {
            return match[0]; // Devuelve el UUID encontrado
        } else {
            return null; // Si no se encuentra ningún UUID, devuelve null
        }
    }

    eliminarDuplicados(array: string[]) {
        return [...new Set(array)];
    }

    getUsers(fotos: string[]) {
        const users = [];
        fotos.forEach((foto) => {
            const user = this.extraerUUID(foto);
            if (user) users.push(user);
        });
        return this.eliminarDuplicados(users);
    }

    handlerError(error: any) {
        this.logger.error(error.message);
        if (error.code === '23505') throw new BadRequestException(error.detail);
        throw new InternalServerErrorException(error.message);
    }
}
