import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCliente1633476472224 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "clientes",
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
                        name: "cpf",
                        type: "varchar(150)"
                    },
                    {
                        name: "dtnasc",
                        type: "varchar(10)"
                    },
                    {
                        name: "idbarbeiro",
                        type: "uuid"
                    }
                ]
            })
        )

        queryRunner.clearSqlMemory();

        const foreignKey = new TableForeignKey({
            columnNames: ["idbarbeiro"],
            referencedColumnNames: ["id"],
            referencedTableName: "barbeiro",
            onDelete: "CASCADE"
        });
        await queryRunner.createForeignKey("clientes", foreignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("clientes");
    }

}
