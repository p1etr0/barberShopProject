import { response } from 'express';
import {hash} from 'bcryptjs'
import { getRepository, Repository, getConnectionManager, getConnection, Connection, createConnection } from 'typeorm';
import {v4 as uuidV4} from 'uuid'
import Procedimentos from '../../entities/Procedimentos';



class ProcedimentosRepository{

  async find(){
    const procedimentos = await getRepository(Procedimentos, "default").find();
    
    return procedimentos;
  }

 


  

  

}

export {ProcedimentosRepository}