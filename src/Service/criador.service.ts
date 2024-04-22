import criadorSchema from "../Schema/criador.schema";

class PersonagemService {
    async list() {
        return await criadorSchema.find();
    }

    async create(data: any) {
        return await criadorSchema.create(data);
    }

    async update(id: string, data: any) {
        return await criadorSchema.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string) {
        return await criadorSchema.findByIdAndDelete(id);
    }
}

export default new PersonagemService();

