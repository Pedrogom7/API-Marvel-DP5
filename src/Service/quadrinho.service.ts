// quadrinho.service.ts
import quadrinhoSchema from "../Schema/quadrinho.schema";

class QuadrinhoService {
    async list() {
        return await quadrinhoSchema.find();
    }

    async create(data: any) {
        return await quadrinhoSchema.create(data);
    }

    async update(id: string, data: any) {
        return await quadrinhoSchema.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string) {
        return await quadrinhoSchema.findByIdAndDelete(id);
    }
}

export default new QuadrinhoService();
