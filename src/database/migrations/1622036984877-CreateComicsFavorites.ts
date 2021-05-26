import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateComicsFavorites1622036984877 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "comics_favorites",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: "id_comic",
            type: "integer"
          },
          {
            name: "title",
            type: "varchar"
          },
          {
            name: "user_id",
            type: "integer"
          }
        ],
        foreignKeys: [
          {
            name: "FKuser",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ['user_id'],
            onDelete: "SET NULL",
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("comics_favorites")
  }

}
