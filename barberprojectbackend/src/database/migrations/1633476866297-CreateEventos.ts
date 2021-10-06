import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateEventos1633475594508 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "eventos",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "idcliente",
                        type: "uuid"
                    },
                    {
                        name: "idbarbeiro",
                        type: "uuid"
                    },
                    {
                        name: "idprocedimento",
                        type: "uuid"
                    }
                ]
            })
        )
        // // clear sqls in memory to avoid removing tables when down queries executed.
        queryRunner.clearSqlMemory();

        const foreignKey = new TableForeignKey({
            columnNames: ["idprocedimento"],
            referencedColumnNames: ["id"],
            referencedTableName: "procedimentos",
            onDelete: "CASCADE"
        });
        await queryRunner.createForeignKey("eventos", foreignKey);

        const foreignKey2 = new TableForeignKey({
            columnNames: ["idbarbeiro"],
            referencedColumnNames: ["id"],
            referencedTableName: "barbeiro",
            onDelete: "CASCADE"
        });
        await queryRunner.createForeignKey("eventos", foreignKey2);

        const foreignKey3 = new TableForeignKey({
            columnNames: ["idcliente"],
            referencedColumnNames: ["id"],
            referencedTableName: "clientes",
            onDelete: "CASCADE"
        });
        await queryRunner.createForeignKey("eventos", foreignKey3);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("eventos");
    }


}
