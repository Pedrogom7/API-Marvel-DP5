// personagem.service.ts
import personagemSchema from "../Schema/personagem.schema";

class PersonagemService {
    async list() {
        return await personagemSchema.find();
    }

    async create(data: any) {
        // Verifica se o array de URLs está definido antes de tentar mapeá-lo
        const formattedData = {
            name: data.name,
            description: data.description,
            resourceURI: data.resourceURI,
            urls: data.urls ? data.urls.map((url: any) => ({
                type: url.type,
                url: url.url
            })) : [] // Se o array de URLs estiver indefinido, inicializa como um array vazio
        };

        return await personagemSchema.create(formattedData);
    }

    async update(id: string, data: any) {
        return await personagemSchema.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string) {
        return await personagemSchema.findByIdAndDelete(id);
    }
}

export default new PersonagemService();
