import { Router } from "express"
import personagemController from "./src/Controller/personagem.controller"
import quadrinhoController from "./src/Controller/quadrinho.controller";
import criadorController from "./src/Controller/criador.controller";

const routes = Router()
routes.get('personagem',personagemController.create);
routes.get('quadrinho',quadrinhoController.create);
routes.get('criador',criadorController.create)

export { routes }