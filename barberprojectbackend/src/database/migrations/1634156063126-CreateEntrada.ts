import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateEntrada1634156063126 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "entrada",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "descricao",
                        type: "varchar(150)"
                    },
                    {
                        name: "valor",
                        type: "varchar(10)"
                    },
                    {
                        name: "idbarber",
                        type: "uuid"
                    },
                ]
            })
        )
        // // clear sqls in memory to avoid removing tables when down queries executed.
        queryRunner.clearSqlMemory();

        const foreignKey = new TableForeignKey({
            columnNames: ["idbarber"],
            referencedColumnNames: ["id"],
            referencedTableName: "barbeiro",
            onDelete: "CASCADE"
        });
        await queryRunner.createForeignKey("entrada", foreignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("entrada");
    }

}
