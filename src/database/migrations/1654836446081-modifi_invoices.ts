import {MigrationInterface, QueryRunner} from "typeorm";

export class modifiInvoices1654836446081 implements MigrationInterface {
    name = 'modifiInvoices1654836446081'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "invoice_product" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "quantity" integer NOT NULL, "productId" integer, "invoiceId" integer, CONSTRAINT "PK_d79d227662ea59bababb37f2553" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "invoice" DROP COLUMN "concept"`);
        await queryRunner.query(`ALTER TABLE "invoice" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "invoice_product" ADD CONSTRAINT "FK_44b0b63f5f6b86b078263363b3b" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "invoice_product" ADD CONSTRAINT "FK_28451c43926a7b7e82b80b2d3ca" FOREIGN KEY ("invoiceId") REFERENCES "invoice"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invoice_product" DROP CONSTRAINT "FK_28451c43926a7b7e82b80b2d3ca"`);
        await queryRunner.query(`ALTER TABLE "invoice_product" DROP CONSTRAINT "FK_44b0b63f5f6b86b078263363b3b"`);
        await queryRunner.query(`ALTER TABLE "invoice" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "invoice" ADD "concept" character varying(100) NOT NULL`);
        await queryRunner.query(`DROP TABLE "invoice_product"`);
    }

}
