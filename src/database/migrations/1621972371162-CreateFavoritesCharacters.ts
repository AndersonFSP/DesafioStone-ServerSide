import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateFavoritesCharacters1621972371162 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "characters_favorites",
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
              name: "id_character",
              type: "integer"
            },
            {
              name: "name",
              type: "varchar"
            },
            {
              name: "user_id",
              type: "integer"
            }
          ],
          foreignKeys:[
            {
              name: "FKuser",
              referencedTableName: "users",
              referencedColumnNames: ["id"],
              columnNames: ['user_id'],
              onDelete: "SET NULL",
              // onUpdate: "SET NULL"
            }
          ]
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('characters_favorites');
    }

}
