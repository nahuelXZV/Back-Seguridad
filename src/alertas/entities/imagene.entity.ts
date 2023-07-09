import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { IImagenes } from "../interfaces/imagenes.interface";
import { Alerta } from "./alerta.entity";


@Entity('imagenes')
export class Imagene extends BaseEntity implements IImagenes {

    @Column()
    nombre: string;

    @Column()
    dir: string;

    @Column()
    tipo: string;

    @ManyToOne(() => Alerta, alerta => alerta.imagenes)
    alerta: Alerta;
}
