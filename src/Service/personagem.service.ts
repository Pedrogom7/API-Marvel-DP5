//service guarda os metodos da regra negocio 
import configApi from "../config.api";
import personagemSchema from "../Schema/personagem.schema"
class PersonagemService{

    //metodo create 
    async create(){
        const data = await configApi.get();
        const personagemCreated =  await personagemSchema.create(data);
        return personagemCreated;
    }

}

export default new PersonagemService();

