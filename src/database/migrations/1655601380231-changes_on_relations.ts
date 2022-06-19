import {MigrationInterface, QueryRunner} from "typeorm";

export class changesOnRelations1655601380231 implements MigrationInterface {
    name = 'changesOnRelations1655601380231'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invoices" DROP CONSTRAINT "UQ_6b20aa66f2a835a4f2fbde48724"`);
        await queryRunner.query(`ALTER TABLE "invoices" DROP COLUMN "number"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invoices" ADD "number" character varying(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "invoices" ADD CONSTRAINT "UQ_6b20aa66f2a835a4f2fbde48724" UNIQUE ("number")`);
    }

}
