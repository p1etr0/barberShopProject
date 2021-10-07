import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class InserindoColunaSenha1633623326347 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("barbeiro", new TableColumn({
            name: "senha",
            type: "varchar",
            isNullable: false
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("barbeiro", "senha");
    }

}
