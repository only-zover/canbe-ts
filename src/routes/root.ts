import { Router } from "express";
import RootController from "../controllers/RootController";

const routes = Router();

routes.get("/", RootController.index);

export default routes;
