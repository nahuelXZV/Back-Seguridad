import { Repository } from 'typeorm';
import { CreateAlertaDto } from '../dto/create-alerta.dto';
import { UpdateAlertaDto } from '../dto/update-alerta.dto';
import { Alerta } from '../entities/alerta.entity';
import { InfractorAlertaEntity } from '../entities/infractor_alerta.entity';
import { InfractorService } from 'src/infractor/services/infractor.service';
export declare class AlertaService {
    private readonly alertaRepository;
    private readonly infractorAlertaRepository;
    private readonly infractorService;
    private readonly logger;
    constructor(alertaRepository: Repository<Alerta>, infractorAlertaRepository: Repository<InfractorAlertaEntity>, infractorService: InfractorService);
    create(createAlertaDto: CreateAlertaDto): Promise<Alerta>;
    findAll(): Promise<Alerta[]>;
    findOne(id: string): Promise<Alerta>;
    update(id: string, updateAlertaDto: UpdateAlertaDto): Promise<Alerta>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    handlerError(error: any): void;
}
