import {v4 as uuidV4} from 'uuid'
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("barbeiro")
class Barbeiro {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  dtnasc: string;

  @Column()
  senha: string;

  constructor(){
    if(!this.id){
      this.id = uuidV4();
    }
  }
}

export {Barbeiro}