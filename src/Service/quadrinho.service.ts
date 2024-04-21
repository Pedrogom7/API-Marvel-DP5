import configApi from "../config.api";
import QuadrinhoSchema from '../Schema/quadrinho.schema'
class QuadrinhoService{
    async create(){
        const data = await configApi.get();
        const quadrinhoCreated =  await QuadrinhoSchema.create(data);
        return quadrinhoCreated;
    }

}

export default new QuadrinhoService();
