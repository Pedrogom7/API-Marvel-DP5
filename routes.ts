import { Router } from "express";
import personagemController from "./src/Controller/personagem.controller";
import quadrinhoController from "./src/Controller/quadrinho.controller";
import criadorController from "./src/Controller/criador.controller";
import { buscarDadosMarvel } from "./src/Controller/marvel.controller";

const routes = Router();

//Rotas para busca na API da Marvel
routes.get('/buscarDadosMarvel', buscarDadosMarvel);

// Rotas para Personagem
routes.get('/personagem', personagemController.list);
routes.post('/personagem', personagemController.create);
routes.put('/personagem/:id', personagemController.update);
routes.delete('/personagem/:id', personagemController.delete);

// Rotas para Quadrinho
routes.get('/quadrinho', quadrinhoController.list);
routes.post('/quadrinho', quadrinhoController.create);
routes.put('/quadrinho/:id', quadrinhoController.update);
routes.delete('/quadrinho/:id', quadrinhoController.delete);

// Rotas para Criador
routes.get('/criador', criadorController.list);
routes.post('/criador', criadorController.create);
routes.put('/criador/:id', criadorController.update);
routes.delete('/criador/:id', criadorController.delete);

export { routes };
