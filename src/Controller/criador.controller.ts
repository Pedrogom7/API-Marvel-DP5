import { Request, Response } from "express";
import criadorService from '../Service/criador.service'
class CriadorController {
    async create(req: Request, res: Response) {
        const criador = criadorService.create()
        return res.status(200).send(criador)
    }
}

export default new CriadorController();
