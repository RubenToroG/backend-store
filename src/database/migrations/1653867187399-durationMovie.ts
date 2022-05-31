import {MigrationInterface, QueryRunner} from "typeorm";

export class durationMovie1653867187399 implements MigrationInterface {
    name = 'durationMovie1653867187399'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Movie" DROP COLUMN "duration"`);
        await queryRunner.query(`ALTER TABLE "Movie" ADD "duration" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Movie" DROP COLUMN "duration"`);
        await queryRunner.query(`ALTER TABLE "Movie" ADD "duration" integer NOT NULL`);
    }

}
