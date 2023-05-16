import { Entity, OneToMany } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";

import { BaseEntity } from "../../common/entities/base.entity";
import { IInfractor } from "../interfaces/infractor.interface";
import { SEXO } from "../../constants";
import { HuellaEntity } from "./huella.entity";
import { FotoEntity } from "./foto.entity";
import { InfraccionEntity } from "./infraccion.entity";

@Entity({ name: 'infractor' })
export class InfractorEntity extends BaseEntity implements IInfractor {
    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column({ unique: true, name: 'cedula_identidad' })
    cedulaIdentidad: string;

    @Column()
    nacionalidad: string;

    @Column({ name: 'fecha_nacimiento' })
    fechaNacimiento: string;

    @Column({ type: 'enum', enum: SEXO })
    sexo: SEXO;

    @Column()
    otros: string;

    @OneToMany(() => HuellaEntity, huella => huella.infractor)
    huellas: HuellaEntity[];

    @OneToMany(() => FotoEntity, foto => foto.infractor)
    fotos: FotoEntity[];

    @OneToMany(() => InfraccionEntity, infraccion => infraccion.infractor)
    infracciones: InfraccionEntity[];
}