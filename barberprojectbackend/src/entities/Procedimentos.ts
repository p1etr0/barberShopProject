import {v4 as uuidV4} from 'uuid'
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("procedimentos")
export default class Procedimentos {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  nome: string;

  @Column()
  duracao: string;

  @Column()
  valor: string;

  constructor(){
    if(!this.id){
      this.id = uuidV4();
    }
  }
}

