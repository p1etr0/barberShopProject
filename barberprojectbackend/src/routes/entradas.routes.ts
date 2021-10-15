import cors from 'cors';
import {Router} from 'express'
import { EntradasRepository } from '../repositories/Entradas/EntradasRepository';

const entradasRouter = Router();
const entradasRepository = new EntradasRepository()

entradasRouter.use(cors());

entradasRouter.get('/', async (request, response) => {
  let entradas = await entradasRepository.find();
  
  entradas = await entradasRepository.returnEntradas(entradas);
  

  return response.json(entradas)
})

export {entradasRouter}