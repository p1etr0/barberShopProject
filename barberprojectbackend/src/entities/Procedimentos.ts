import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("procedimentos")
export default class Procedimentos {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  nome: string;

  @Column()
  duracao: string;

  @Column()
  valor: string;
}

