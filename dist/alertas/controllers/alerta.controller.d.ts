import { CreateAlertaDto } from '../dto/create-alerta.dto';
import { UpdateAlertaDto } from '../dto/update-alerta.dto';
import { AlertaService } from '../services/alerta.service';
export declare class AlertaController {
    private readonly alertaService;
    constructor(alertaService: AlertaService);
    create(createAlertaDto: CreateAlertaDto): Promise<import("../entities/alerta.entity").Alerta>;
    findAll(): Promise<import("../entities/alerta.entity").Alerta[]>;
    findOne(id: string): Promise<import("../entities/alerta.entity").Alerta>;
    update(id: string, updateAlertaDto: UpdateAlertaDto): Promise<import("../entities/alerta.entity").Alerta>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
