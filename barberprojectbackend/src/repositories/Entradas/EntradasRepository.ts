import { getRepository } from "typeorm";
import { Barbeiro } from "../../entities/Barbeiro";
import Entrada from "../../entities/Entradas";

class EntradasRepository{

  async find(){
    const entradas = await getRepository(Entrada, "default").find();
    
    return entradas;
  }

  async nomeBarber(id: string){

    const nomeBarbeiro = await getRepository(Barbeiro, "default").findOne({where: {id: id}})
    
    return nomeBarbeiro.nome;
  }

  async returnEntradas(entradas: Entrada[]){

    await Promise.all(
      entradas.map(async (entrada) => {
        let nome = await this.nomeBarber(entrada.idbarber);
        entrada.idbarber = nome;
        delete entrada.id
      })
    ).then(() => {})

    return entradas

  }
}

export {EntradasRepository}