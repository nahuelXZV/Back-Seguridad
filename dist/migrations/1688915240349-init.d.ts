import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Init1688915240349 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
