import { Router } from "express";
import { barberRoutes } from "./barber.routes";

const router = Router();

router.use("/barber", barberRoutes);

export {router}
