import { createConnection } from "typeorm";

async function createConnectionDefault(){
 await createConnection()
}

export {createConnectionDefault}