import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("clientes")
export default class Cliente {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @Column()
  dtnasc: string;

  @Column()
  idbarbeiro: string;
}
