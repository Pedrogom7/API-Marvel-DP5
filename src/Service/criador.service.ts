//service guarda os metodos da regra negocio 
import configApi from "../config.api";
import criadorSchema from "../Schema/criador.schema"
class CriadorService{

    //metodo create 
    async create(){
        const data = await configApi.get();
        const criadorCreated =  await criadorSchema.create(data);
        return criadorCreated;
    }

}

export default new CriadorService();

