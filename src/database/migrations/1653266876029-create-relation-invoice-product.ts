import {MigrationInterface, QueryRunner} from "typeorm";

export class createRelationInvoiceProduct1653266876029 implements MigrationInterface {
    name = 'createRelationInvoiceProduct1653266876029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "invoice_products_product" ("invoiceId" integer NOT NULL, "productId" integer NOT NULL, CONSTRAINT "PK_df7d1fccacf2eff277abe1cd099" PRIMARY KEY ("invoiceId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a3b2dbd445d44d8c0e4f5539b9" ON "invoice_products_product" ("invoiceId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e6f5f590fa787115b251f22430" ON "invoice_products_product" ("productId") `);
        await queryRunner.query(`ALTER TABLE "invoice_products_product" ADD CONSTRAINT "FK_a3b2dbd445d44d8c0e4f5539b99" FOREIGN KEY ("invoiceId") REFERENCES "invoice"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "invoice_products_product" ADD CONSTRAINT "FK_e6f5f590fa787115b251f224301" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invoice_products_product" DROP CONSTRAINT "FK_e6f5f590fa787115b251f224301"`);
        await queryRunner.query(`ALTER TABLE "invoice_products_product" DROP CONSTRAINT "FK_a3b2dbd445d44d8c0e4f5539b99"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e6f5f590fa787115b251f22430"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a3b2dbd445d44d8c0e4f5539b9"`);
        await queryRunner.query(`DROP TABLE "invoice_products_product"`);
    }

}
