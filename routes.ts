import { Router } from "express";
import personagemController from "./src/Controller/personagem.controller";
import quadrinhoController from "./src/Controller/quadrinho.controller";
import criadorController from "./src/Controller/criador.controller";

const routes = Router();

// Rotas para Personagem
routes.get('/personagem', personagemController.list);
routes.post('/personagem', personagemController.create);
routes.put('/personagem/:id', personagemController.update);
routes.delete('/personagem/:id', personagemController.delete);

// Rotas para Quadrinho
routes.get('/quadrinhos', quadrinhoController.list);
routes.post('/quadrinhos', quadrinhoController.create);
routes.put('/quadrinhos/:id', quadrinhoController.update);
routes.delete('/quadrinhos/:id', quadrinhoController.delete);

// Rotas para Criador
routes.get('/criadores', criadorController.list);
routes.post('/criadores', criadorController.create);
routes.put('/criadores/:id', criadorController.update);
routes.delete('/criadores/:id', criadorController.delete);

export { routes };
