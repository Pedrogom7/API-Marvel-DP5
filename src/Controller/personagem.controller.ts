import { Request, Response } from "express";
import personagemService from "../Service/personagem.service";
class PersonagemController {
    async create(req: Request, res: Response) {
        const personagem = personagemService.create()
        return res.status(200).send(personagem)
    }
}

export default new PersonagemController();
