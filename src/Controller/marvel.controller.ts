// src/Controller/marvel.controller.ts
import { Request, Response } from "express";
import ExternalApiService from "../../ExternalApi";
import PersonagemService from "../Service/personagem.service"; // Importe os serviços necessários
import QuadrinhoService from "../Service/quadrinho.service";
import CriadorService from "../Service/criador.service";

export async function buscarDadosMarvel(req: Request, res: Response) {
    try {
        // Chame a função da External API Service para buscar os dados da Marvel API
        const charactersData = await ExternalApiService.getMarvelData('http://gateway.marvel.com/v1/public/characters?series=489&ts=180503&apikey=1ffa9f3aa4a31a059a9ad065ed195445&hash=ac0a3f9025dbf78b62c22d6d6d981268');
        const comicsData = await ExternalApiService.getMarvelData('http://gateway.marvel.com/v1/public/comics?series=489&ts=180503&apikey=1ffa9f3aa4a31a059a9ad065ed195445&hash=ac0a3f9025dbf78b62c22d6d6d981268');
        const creatorsData = await ExternalApiService.getMarvelData('http://gateway.marvel.com/v1/public/creators?series=489&ts=180503&apikey=1ffa9f3aa4a31a059a9ad065ed195445&hash=ac0a3f9025dbf78b62c22d6d6d981268');

        // Salve os dados no banco de dados usando os serviços apropriados
        await PersonagemService.create(charactersData);
        await QuadrinhoService.create(comicsData);
        await CriadorService.create(creatorsData);

        return res.status(200).json({ message: 'Dados da Marvel API salvos com sucesso no banco de dados' });
    } catch (error) {
        console.error('Erro ao buscar e salvar dados da Marvel API:', error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}
