import {MigrationInterface, QueryRunner} from "typeorm";

export class reloadHeroku1653866700100 implements MigrationInterface {
    name = 'reloadHeroku1653866700100'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Movie" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "original_title" character varying NOT NULL, "release_year" integer NOT NULL, "wiki_link" character varying NOT NULL, "music" character varying NOT NULL, "duration" integer NOT NULL, "cover" character varying NOT NULL, "banner" character varying NOT NULL, "description" text NOT NULL, "trailer" character varying NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_db9b75bd0e21fb0e5e018f03412" UNIQUE ("title"), CONSTRAINT "PK_56d58b76292b87125c5ec8bdde0" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Movie"`);
    }

}
