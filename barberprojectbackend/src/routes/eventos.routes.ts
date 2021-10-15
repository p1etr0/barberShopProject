import cors from 'cors';
import {Router} from 'express'
import { ReplSet } from 'typeorm';
import { EventosRepository } from '../repositories/Eventos/EventosRepository';

const eventosRouter = Router();
const eventosRepository = new EventosRepository();

eventosRouter.use(cors());

eventosRouter.get("/", async (request, response) => {
  let eventos = await eventosRepository.find()

  eventos = await eventosRepository.retornaEventos(eventos);

  return response.json(eventos)
})





export {eventosRouter}