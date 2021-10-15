import { getRepository, Repository, getConnectionManager, getConnection, Connection, createConnection } from 'typeorm';
import {v4 as uuidV4} from 'uuid'
import Cliente from "../../entities/Cliente";

interface ICliente {
  id?: string,
  nome: string,
  cpf: string,
  dtnasc: string,
  idbarber?: string
}



class ClienteRepository{

  async find(){
    const clientes = await getRepository(Cliente, "default").find();
    
    return clientes;
  }

  async create({nome, cpf, dtnasc}: ICliente){
    const cliente = {
      id: uuidV4(),
      nome,
      cpf,
      dtnasc,
      idbarbeiro: '8fba9759-8dac-49dd-99b3-b9a648a0b442'
    };
    
    await getRepository(Cliente, "default").save(cliente);
  }
  

}

export {ClienteRepository}


