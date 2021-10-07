import {v4 as uuidV4} from 'uuid'
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("eventos")
export default class Eventos {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  idcliente: string;

  @Column()
  idbarbeiro: string;

  @Column()
  idprocedimento: string;

  constructor(){
    if(!this.id){
      this.id = uuidV4();
    }
  }
}
