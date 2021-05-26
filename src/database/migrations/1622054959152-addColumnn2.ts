import {MigrationInterface, QueryRunner} from "typeorm";

export class addColumnn21622054959152 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE comics_favorites ADD image VARCHAR;");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE comics_favorites DROP COLUMN image");
  }

}
