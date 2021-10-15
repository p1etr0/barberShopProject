import cors from 'cors';
import {Router} from 'express'
import { ClienteRepository } from '../repositories/Cliente/ClienteRepository';

const clientesRouter = Router();
const clientesRepository = new ClienteRepository()

clientesRouter.use(cors());

clientesRouter.get('/', async (request, response) => {
  const clientes = await clientesRepository.find();
  
  return response.json(clientes)
})

clientesRouter.post("/", async (request, response) => {
  const {nome, cpf, dtnasc} = request.body;

  await clientesRepository.create({nome, cpf, dtnasc});

  return response.status(201).send()

})

export {clientesRouter}