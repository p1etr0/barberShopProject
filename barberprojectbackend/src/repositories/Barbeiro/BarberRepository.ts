import { response } from 'express';
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

    const barber = {
      id: uuidV4(),
      nome,
      email,
      dtnasc,
      senha
    };


    await getRepository(Barbeiro, "default").save(barber);
  }

}

export {BarberRepository}