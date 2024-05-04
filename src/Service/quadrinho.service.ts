// quadrinho.service.ts
import quadrinhoSchema from "../Schema/quadrinho.schema";

class QuadrinhoService {
    async list() {
        return await quadrinhoSchema.find();
    }

    async create(data: any) {
        // Verifica se o array de datas está definido antes de tentar mapeá-lo
        const formattedData = {
            title: data.title,
            description: data.description,
            dates: data.dates ? data.dates.map((date: any) => ({
                type: date.type,
                date: date.date
            })) : [], // Se o array de datas estiver indefinido, inicializa como um array vazio
            thumbnail: data.thumbnail
        };

        return await quadrinhoSchema.create(formattedData);
    }

    async update(id: string, data: any) {
        return await quadrinhoSchema.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string) {
        return await quadrinhoSchema.findByIdAndDelete(id);
    }
}

export default new QuadrinhoService();
