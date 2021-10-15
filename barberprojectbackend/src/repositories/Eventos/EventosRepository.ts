import { response } from 'express';
import {hash} from 'bcryptjs'
import { getRepository, Repository, getConnectionManager, getConnection, Connection, createConnection } from 'typeorm';
import {v4 as uuidV4} from 'uuid'
import Eventos from '../../entities/Eventos';
import { Barbeiro } from '../../entities/Barbeiro';
import Cliente from '../../entities/Cliente';
import Procedimentos from '../../entities/Procedimentos';



class EventosRepository{

  async find(){
    const eventos = await getRepository(Eventos, "default").find();
    
    return eventos;
  }

  async nomeProcedimento(id: string){
    const nomeProcedimento = await getRepository(Procedimentos, "default").findOne({where: {id: id}})
    
    return nomeProcedimento.nome;
  }

  async nomeBarber(id: string){
    const nomeBarbeiro = await getRepository(Barbeiro, "default").findOne({where: {id: id}})
    
    return nomeBarbeiro.nome;
  }

  async nomeCliente(id: string){
    const nomeCliente = await getRepository(Cliente, "default").findOne({where: {id: id}})
    
    return nomeCliente.nome;
  }

  async retornaEventos(eventos: Eventos[]){
    await Promise.all(
      eventos.map(async (evento) => {
        let nomeBarbeiro = await this.nomeBarber(evento.idbarbeiro);
        evento.idbarbeiro = nomeBarbeiro
        
        let nomeCliente = await this.nomeCliente(evento.idcliente)
        evento.idcliente = nomeCliente

        let nomeProcedimento = await this.nomeProcedimento(evento.idprocedimento)
        evento.idprocedimento = nomeProcedimento

        delete evento.id
      })
    ).then(() => {})

    return eventos
  }


  

  

}

export {EventosRepository}