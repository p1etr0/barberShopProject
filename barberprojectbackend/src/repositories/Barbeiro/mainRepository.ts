import { getRepository } from "typeorm";
import { Barbeiro } from "../../entities/Barbeiro";


async function mainRepository(){
  const repository = await getRepository(Barbeiro, "default")

  return repository;
}

export {mainRepository}