// criador.service.ts
import criadorSchema from "../Schema/criador.schema";

class CriadorService {
    async list() {
        return await criadorSchema.find();
    }

    async create(data: any) {
        // Verifica se o array de contribuições está definido antes de tentar mapeá-lo
        const formattedData = {
            name: data.name,
            funcao: data.funcao,
            resourceURI: data.resourceURI,
            contribuicao: data.contribuicao ? data.contribuicao.map((contribuicao: any) => contribuicao.resourceURI) : [] // Extrai apenas os resourceURIs das contribuições
        };

        return await criadorSchema.create(formattedData);
    }

    async update(id: string, data: any) {
        return await criadorSchema.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string) {
        return await criadorSchema.findByIdAndDelete(id);
    }
}

export default new CriadorService();
