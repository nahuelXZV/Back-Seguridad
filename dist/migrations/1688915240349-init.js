"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init1688915240349 = void 0;
class Init1688915240349 {
    constructor() {
        this.name = 'Init1688915240349';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "imagenes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "nombre" character varying NOT NULL, "dir" character varying NOT NULL, "tipo" character varying NOT NULL, "alerta_id" uuid, CONSTRAINT "PK_8a74dd76fc7dcbf7c200583474b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "infractor_alerta" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "infractor_id" uuid, "alerta_id" uuid, CONSTRAINT "PK_90bac41dd681eb896b216bc939b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "alerta" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "motivo" character varying NOT NULL, "fecha" character varying NOT NULL, "hora" character varying NOT NULL, CONSTRAINT "PK_e60bfc27e2ae1b6bbdca11ac524" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TYPE "public"."user_role_enum" RENAME TO "user_role_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('administrador', 'guardia', 'funcionario')`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "role" TYPE "public"."user_role_enum" USING "role"::"text"::"public"."user_role_enum"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum_old"`);
        await queryRunner.query(`ALTER TABLE "imagenes" ADD CONSTRAINT "FK_ef132f36b48dde468dc82956366" FOREIGN KEY ("alerta_id") REFERENCES "alerta"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "infractor_alerta" ADD CONSTRAINT "FK_c9a9feb3aedc45205a50e9f6ea9" FOREIGN KEY ("infractor_id") REFERENCES "infractor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "infractor_alerta" ADD CONSTRAINT "FK_22cebd6888fe1b21d4cba8968a4" FOREIGN KEY ("alerta_id") REFERENCES "alerta"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "infractor_alerta" DROP CONSTRAINT "FK_22cebd6888fe1b21d4cba8968a4"`);
        await queryRunner.query(`ALTER TABLE "infractor_alerta" DROP CONSTRAINT "FK_c9a9feb3aedc45205a50e9f6ea9"`);
        await queryRunner.query(`ALTER TABLE "imagenes" DROP CONSTRAINT "FK_ef132f36b48dde468dc82956366"`);
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum_old" AS ENUM('basic', 'admin')`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "role" TYPE "public"."user_role_enum_old" USING "role"::"text"::"public"."user_role_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."user_role_enum_old" RENAME TO "user_role_enum"`);
        await queryRunner.query(`DROP TABLE "alerta"`);
        await queryRunner.query(`DROP TABLE "infractor_alerta"`);
        await queryRunner.query(`DROP TABLE "imagenes"`);
    }
}
exports.Init1688915240349 = Init1688915240349;
//# sourceMappingURL=1688915240349-init.js.map