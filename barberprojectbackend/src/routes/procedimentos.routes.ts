import cors from 'cors';
import {Router} from 'express'
import { ReplSet } from 'typeorm';
import { ProcedimentosRepository } from '../repositories/Procedimentos/ProcedimentosRepository';


const procedimentosRouter = Router();
const eventosRepository = new ProcedimentosRepository();

procedimentosRouter.use(cors());

procedimentosRouter.get("/", async (request, response) => {
  let eventos = await eventosRepository.find()

  return response.json(eventos)
})



export {procedimentosRouter}