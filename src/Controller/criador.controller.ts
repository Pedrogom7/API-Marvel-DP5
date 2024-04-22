import { Request, Response } from "express";
import criadorService from "../Service/criador.service";

class CriadorController {
    async list(req: Request, res: Response) {
        try {
            const criadores = await criadorService.list();
            return res.status(200).json(criadores);
        } catch (error) {
            console.error('Erro ao listar criadores:', error);
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const criador = await criadorService.create(req.body);
            return res.status(201).json(criador);
        } catch (error) {
            console.error('Erro ao criar criador:', error);
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const criador = await criadorService.update(req.params.id, req.body);
            return res.status(200).json(criador);
        } catch (error) {
            console.error('Erro ao atualizar criador:', error);
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            await criadorService.delete(req.params.id);
            return res.status(204).send();
        } catch (error) {
            console.error('Erro ao deletar criador:', error);
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
}

export default new CriadorController();