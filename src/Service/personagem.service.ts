import personagemSchema from "../Schema/personagem.schema";

class PersonagemService {
    async list() {
        return await personagemSchema.find();
    }

    async create(data: any) {
        return await personagemSchema.create(data);
    }

    async update(id: string, data: any) {
        return await personagemSchema.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string) {
        return await personagemSchema.findByIdAndDelete(id);
    }
}

export default new PersonagemService();

