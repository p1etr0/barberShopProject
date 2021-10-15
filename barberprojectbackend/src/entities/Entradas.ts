import {v4 as uuidV4} from 'uuid'
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("entrada")
export default class Entrada {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  descricao: string;

  @Column()
  valor: string;

  @Column()
  idbarber: string;

  constructor(){
    if(!this.id){
      this.id = uuidV4();
    }
  }
}
