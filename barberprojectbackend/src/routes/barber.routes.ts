import { Router } from "express";
import {BarberRepository} from '../repositories/Barbeiro/BarberRepository'
import cors from 'cors'

const barberRoutes = Router();
const barberRepository = new BarberRepository()

barberRoutes.use(cors());

barberRoutes.get("/", async (request, response) => {
  
  const barber = await barberRepository.find()

  return response.json(barber)
})

barberRoutes.post("/", async (request, response) =>{
  const {nome, email, dtnasc} = request.body;
  const newBarber = {
    nome,
    email,
    dtnasc
  }
  const barber = await barberRepository.create(newBarber);

  return response.status(201).send(); 
})


export {barberRoutes}