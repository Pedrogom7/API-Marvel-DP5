// src/Controller/quadrinho.controller.ts
import { Request, Response } from "express";
import quadrinhoService from "../Service/quadrinho.service";

class QuadrinhoController {
    async list(req: Request, res: Response) {
        try {
            const quadrinhos = await quadrinhoService.list();
            return res.status(200).json(quadrinhos);
        } catch (error) {
            console.error('Erro ao listar quadrinhos:', error);
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const quadrinho = await quadrinhoService.create(req.body);
            return res.status(201).json(quadrinho);
        } catch (error) {
            console.error('Erro ao criar quadrinho:', error);
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const quadrinho = await quadrinhoService.update(req.params.id, req.body);
            return res.status(200).json(quadrinho);
        } catch (error) {
            console.error('Erro ao atualizar quadrinho:', error);
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            await quadrinhoService.delete(req.params.id);
            return res.status(204).send();
        } catch (error) {
            console.error('Erro ao deletar quadrinho:', error);
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
}

export default new QuadrinhoController();


