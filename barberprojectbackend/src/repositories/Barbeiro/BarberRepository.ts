import { response } from 'express';
import {hash} from 'bcryptjs'
import { getRepository, Repository, getConnectionManager, getConnection, Connection, createConnection } from 'typeorm';
import {Barbeiro} from '../../entities/Barbeiro';
import {v4 as uuidV4} from 'uuid'

interface IBarber{
  nome: string;
  email: string;
  dtnasc: string;
  senha: string;
}


class BarberRepository{

  async find(){
    const barbeiro = await getRepository(Barbeiro, "default").find();
    
    return barbeiro;
  }

  async create({nome, email, dtnasc, senha}: IBarber){
    const emailAlreadyExists = await getRepository(Barbeiro, "default").findOne({email: email});

    if(emailAlreadyExists){
      throw new Error("Usuario já existe");
    }

    if(senha.length != 8){
      throw new Error("Senha com tamanho diferente de 8");
    }

    const password = await hash(senha, 8);
    
    const barber = {
      id: uuidV4(),
      nome,
      email,
      dtnasc,
      senha: password
    };

    await getRepository(Barbeiro, "default").save(barber);
  }

}

export {BarberRepository}