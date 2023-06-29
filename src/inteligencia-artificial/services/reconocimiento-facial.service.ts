import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InfractorService } from 'src/infractor/services/infractor.service';
import { RecoknitionService } from 'src/providers/recoknition/recoknition.service';

@Injectable()
export class ReconocimientoFacialService {
  private readonly logger = new Logger('ReconocimientoFacialService');

  constructor(
    private readonly recoknitionService: RecoknitionService,
    private readonly infractorService: InfractorService
  ) { }

  public async reconocimientoFacial(foto: Express.Multer.File) {
    try {
      console.log(foto);
      const fotos = await this.recoknitionService.searchEventosUsuariosFaces(foto);
      const usuariosId = this.getUsers(fotos);

      console.log(usuariosId);

      if (!usuariosId.length) return { message: 'No se encontraron coincidencias' };
      const infractor = await this.infractorService.findOne(usuariosId[0]);
      if (!infractor) return { message: 'No se encontraron coincidencias' };
      return infractor;
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
