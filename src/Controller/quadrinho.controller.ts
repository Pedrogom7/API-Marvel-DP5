import { Request, Response } from "express";
import quadrinhoService from "../Service/quadrinho.service"
class QuadrinhoController {

    async create(req: Request, res: Response) {
        const quadrinho = quadrinhoService.create()
        return res.status(200).send(quadrinho)
    }
}

export default new QuadrinhoController();
