import { Router } from "express";
import { barberRoutes } from "./barber.routes";
import { clientesRouter } from "./clientes.routes";
import { entradasRouter } from "./entradas.routes";
import { eventosRouter } from "./eventos.routes";
import { procedimentosRouter } from "./procedimentos.routes";

const router = Router();

router.use("/barber", barberRoutes);
router.use("/entradas", entradasRouter);
router.use("/eventos", eventosRouter);
router.use("/clientes", clientesRouter);
router.use("/procedimentos", procedimentosRouter);

export {router}
