import { Entity, ManyToOne, OneToMany, OneToOne, Column } from "typeorm";

import { BaseEntity } from "../../common/entities/base.entity";
import { InfractorEntity } from "./infractor.entity";
import { IInfraccion } from "../interfaces/infraccion.interface";
import { EstadioEntity } from "./estadio.entity";
import { TestigoEntity } from "./testigo.entity";
import { UsersEntity } from "../../users/entities/users.entity";
import { DocumentoEntity } from "./documento.entity";
import { SansionEntity } from "./sansion.entity";

@Entity({ name: 'infraccion' })
export class InfraccionEntity extends BaseEntity implements IInfraccion {

    @Column()
    fecha: string;

    @Column()
    hora: string;

    @Column()
    seccion: string;

    @Column()
    fila: string;

    @Column()
    asiento: string;

    @Column({ type: 'text' })
    descripcion: string;

    @Column({ default: 'pendiente' })
    estado: string;

    @OneToOne(() => SansionEntity, sansion => sansion.infraccion)
    sansion: SansionEntity;

    @ManyToOne(() => InfractorEntity, infractor => infractor.infracciones, { onDelete: 'CASCADE' })
    infractor: InfractorEntity;

    @ManyToOne(() => EstadioEntity, estadio => estadio.infracciones, { onDelete: 'CASCADE' })
    estadio: EstadioEntity;

    @ManyToOne(() => UsersEntity, user => user.infracciones, { onDelete: 'CASCADE' })
    creador: UsersEntity;

    @OneToMany(() => TestigoEntity, testigo => testigo.infraccion)
    testigos: TestigoEntity[];

    @OneToMany(() => DocumentoEntity, documento => documento.infraccion)
    documentos: DocumentoEntity[];

}