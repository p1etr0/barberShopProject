import 'reflect-metadata';
import {createConnectionDefault} from './database/index'
import express, { request, response, NextFunction } from 'express'
import { router } from './routes';

const app = express();

createConnectionDefault();

app.use(express.json())

app.use(router);


app.listen(3333, () => {
  console.log("Server started! 🚀")
})

function cors(): any {
  throw new Error('Function not implemented.');
}
