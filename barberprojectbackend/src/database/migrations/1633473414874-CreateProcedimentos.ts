import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProcedimentos1633473414874 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "procedimentos",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "nome",
                        type: "varchar(150)"
                    },
                    {
                        name: "duracao",
                        type: "varchar(10)"
                    },
                    {
                        name: "valor",
                        type: "varchar(10)"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("procedimentos");
    }

}
