"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init1684277803833 = void 0;
class Init1684277803833 {
    constructor() {
        this.name = 'Init1684277803833';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."huella_tipo_huella_enum" AS ENUM('indice_derecho', 'indice_izquierdo', 'medio_derecho', 'medio_izquierdo', 'anular_derecho', 'anular_izquierdo', 'menique_derecho', 'menique_izquierdo', 'pulgar_derecho', 'pulgar_izquierdo')`);
        await queryRunner.query(`CREATE TABLE "huella" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "tipo_huella" "public"."huella_tipo_huella_enum" NOT NULL, "huella" character varying NOT NULL, "infractor_id" uuid, CONSTRAINT "PK_f52a274aee59ffc438a3fe8ca86" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "foto" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "dir" character varying NOT NULL, "nombre" character varying NOT NULL, "infractor_id" uuid, CONSTRAINT "PK_2496ab6b734626c5adcd6c0a37f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."infractor_sexo_enum" AS ENUM('masculino', 'femenino', 'otro')`);
        await queryRunner.query(`CREATE TABLE "infractor" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "nombre" character varying NOT NULL, "apellido" character varying NOT NULL, "cedula_identidad" character varying NOT NULL, "nacionalidad" character varying NOT NULL, "fecha_nacimiento" character varying NOT NULL, "sexo" "public"."infractor_sexo_enum" NOT NULL, "otros" character varying NOT NULL, CONSTRAINT "UQ_a9ebcb98a85218a1a2c30e45f10" UNIQUE ("cedula_identidad"), CONSTRAINT "PK_b7a105ff76b947f7002dd87b0dd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "estadio" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "nombre" character varying NOT NULL, "departamento" character varying NOT NULL, "ciudad" character varying NOT NULL, "direccion" character varying NOT NULL, CONSTRAINT "PK_f8e4db997674ec0a9b2b1e58163" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "testigo" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "nombre" character varying NOT NULL, "apellido" character varying NOT NULL, "cedula_identidad" character varying NOT NULL, "nacionalidad" character varying NOT NULL, "sexo" character varying NOT NULL, "telefono" character varying NOT NULL, "infraccion_id" uuid, CONSTRAINT "PK_17ba851e3796da6e6f004e0c429" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('administrador', 'guardia','funcionario')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "nombre" character varying NOT NULL, "apellido" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" "public"."user_role_enum" NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sansion" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "nombre" character varying NOT NULL, "tiempo" character varying NOT NULL, "descripcion" text NOT NULL, "fecha_inicio" character varying NOT NULL, "estado" character varying NOT NULL, "infraccion_id" uuid, CONSTRAINT "REL_79f1aae0da98637a60c7f9c7e2" UNIQUE ("infraccion_id"), CONSTRAINT "PK_4fe03ade5b192186f41fef26159" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "infraccion" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "fecha" character varying NOT NULL, "hora" character varying NOT NULL, "seccion" character varying NOT NULL, "fila" character varying NOT NULL, "asiento" character varying NOT NULL, "descripcion" text NOT NULL, "estado" character varying NOT NULL DEFAULT 'pendiente', "infractor_id" uuid, "estadio_id" uuid, "creador_id" uuid, CONSTRAINT "PK_3b5a5634664b1d513f61f617b3f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "documento" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "dir" character varying NOT NULL, "nombre" character varying NOT NULL, "descripcion" character varying NOT NULL, "tipo" character varying NOT NULL, "infraccion_id" uuid, CONSTRAINT "PK_14a00534ba5a1136f420342c965" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "huella" ADD CONSTRAINT "FK_344b67545c63a9b222f12f7007b" FOREIGN KEY ("infractor_id") REFERENCES "infractor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "foto" ADD CONSTRAINT "FK_f850d8485eaba3bb1950d393587" FOREIGN KEY ("infractor_id") REFERENCES "infractor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "testigo" ADD CONSTRAINT "FK_4da6b9d86f52e20ec6c50a79e15" FOREIGN KEY ("infraccion_id") REFERENCES "infraccion"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sansion" ADD CONSTRAINT "FK_79f1aae0da98637a60c7f9c7e29" FOREIGN KEY ("infraccion_id") REFERENCES "infraccion"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "infraccion" ADD CONSTRAINT "FK_d9244cba007360ce82f354dda17" FOREIGN KEY ("infractor_id") REFERENCES "infractor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "infraccion" ADD CONSTRAINT "FK_25597696766e605ec1839ba422d" FOREIGN KEY ("estadio_id") REFERENCES "estadio"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "infraccion" ADD CONSTRAINT "FK_254bf620a3088da00072a5bd3be" FOREIGN KEY ("creador_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "documento" ADD CONSTRAINT "FK_b176a6a27adea09ec4d2e5347c9" FOREIGN KEY ("infraccion_id") REFERENCES "infraccion"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "documento" DROP CONSTRAINT "FK_b176a6a27adea09ec4d2e5347c9"`);
        await queryRunner.query(`ALTER TABLE "infraccion" DROP CONSTRAINT "FK_254bf620a3088da00072a5bd3be"`);
        await queryRunner.query(`ALTER TABLE "infraccion" DROP CONSTRAINT "FK_25597696766e605ec1839ba422d"`);
        await queryRunner.query(`ALTER TABLE "infraccion" DROP CONSTRAINT "FK_d9244cba007360ce82f354dda17"`);
        await queryRunner.query(`ALTER TABLE "sansion" DROP CONSTRAINT "FK_79f1aae0da98637a60c7f9c7e29"`);
        await queryRunner.query(`ALTER TABLE "testigo" DROP CONSTRAINT "FK_4da6b9d86f52e20ec6c50a79e15"`);
        await queryRunner.query(`ALTER TABLE "foto" DROP CONSTRAINT "FK_f850d8485eaba3bb1950d393587"`);
        await queryRunner.query(`ALTER TABLE "huella" DROP CONSTRAINT "FK_344b67545c63a9b222f12f7007b"`);
        await queryRunner.query(`DROP TABLE "documento"`);
        await queryRunner.query(`DROP TABLE "infraccion"`);
        await queryRunner.query(`DROP TABLE "sansion"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
        await queryRunner.query(`DROP TABLE "testigo"`);
        await queryRunner.query(`DROP TABLE "estadio"`);
        await queryRunner.query(`DROP TABLE "infractor"`);
        await queryRunner.query(`DROP TYPE "public"."infractor_sexo_enum"`);
        await queryRunner.query(`DROP TABLE "foto"`);
        await queryRunner.query(`DROP TABLE "huella"`);
        await queryRunner.query(`DROP TYPE "public"."huella_tipo_huella_enum"`);
    }
}
exports.Init1684277803833 = Init1684277803833;
//# sourceMappingURL=1684277803833-init.js.map