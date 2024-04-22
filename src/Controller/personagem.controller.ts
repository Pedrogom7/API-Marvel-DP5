import { Request, Response } from "express";
import personagemService from "../Service/personagem.service";

class PersonagemController {
    async list(req: Request, res: Response) {
        try {
            const personagens = await personagemService.list();
            return res.status(200).json(personagens);
        } catch (error) {
            console.error('Erro ao listar personagens:', error);
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const personagem = await personagemService.create(req.body);
            return res.status(201).json(personagem);
        } catch (error) {
            console.error('Erro ao criar personagem:', error);
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const personagem = await personagemService.update(req.params.id, req.body);
            return res.status(200).json(personagem);
        } catch (error) {
            console.error('Erro ao atualizar personagem:', error);
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            await personagemService.delete(req.params.id);
            return res.status(204).send();
        } catch (error) {
            console.error('Erro ao deletar personagem:', error);
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
}

export default new PersonagemController();
