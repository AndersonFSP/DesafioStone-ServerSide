import {MigrationInterface, QueryRunner} from "typeorm";

export class addColumnn1622054732986 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE characters_favorites ADD image VARCHAR;");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE characters_favorites DROP COLUMN image");
  }

}
