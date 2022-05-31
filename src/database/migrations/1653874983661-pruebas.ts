import {MigrationInterface, QueryRunner} from "typeorm";

export class pruebas1653874983661 implements MigrationInterface {
    name = 'pruebas1653874983661'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movie" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "original_title" character varying NOT NULL, "release_year" integer NOT NULL, "wiki_link" character varying NOT NULL, "music" character varying NOT NULL, "duration" character varying NOT NULL, "cover" character varying NOT NULL, "banner" character varying NOT NULL, "description" text NOT NULL, "trailer" character varying NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_a81090ad0ceb645f30f9399c347" UNIQUE ("title"), CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "movie"`);
    }

}
