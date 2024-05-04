// criador.service.test.ts
import CriadorService from '../src/Service/criador.service';

describe('CriadorService', () => {
    it('Deve listar criadores corretamente', async () => {
        const criadores = await CriadorService.list();
        expect(criadores).toBeDefined();
    });

    it('Deve criar um criador corretamente', async () => {
        const novoCriador = await CriadorService.create({
            name: 'Novo Criador',
            funcao: 'Escritor',
            resourceURI: 'uri-do-criador'
        });
        expect(novoCriador).toBeDefined();
    });

    it('Deve atualizar um criador corretamente', async () => {
        const criadorAtualizado = await CriadorService.update('id-do-criador', {
            name: 'Criador Atualizado'
        });
        expect(criadorAtualizado).toBeDefined();
        expect(criadorAtualizado.name).toBe('Criador Atualizado');
    });

    it('Deve deletar um criador corretamente', async () => {
        const idDoCriador = 'id-do-criador';
        await CriadorService.delete(idDoCriador);
        const criadorDeletado = await CriadorService.findById(idDoCriador);
        expect(criadorDeletado).toBeNull();
    });
});
