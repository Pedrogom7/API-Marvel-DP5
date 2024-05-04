// personagem.service.test.ts
import PersonagemService from '../src/Service/personagem.service';

describe('PersonagemService', () => {
    it('Deve listar personagens corretamente', async () => {
        const personagens = await PersonagemService.list();
        expect(personagens).toBeDefined();
    });

    it('Deve criar um personagem corretamente', async () => {
        const novoPersonagem = await PersonagemService.create({
            name: 'Novo Personagem',
            description: 'Descrição do novo personagem',
            resourceURI: 'uri-do-personagem',
            urls: [{ type: 'detail', url: 'url-do-personagem' }]
        });
        expect(novoPersonagem).toBeDefined();
    });

    it('Deve atualizar um personagem corretamente', async () => {
        const personagemAtualizado = await PersonagemService.update('id-do-personagem', {
            name: 'Personagem Atualizado'
        });
        expect(personagemAtualizado).toBeDefined();
        expect(personagemAtualizado.name).toBe('Personagem Atualizado');
    });

    it('Deve deletar um personagem corretamente', async () => {
        const idDoPersonagem = 'id-do-personagem';
        await PersonagemService.delete(idDoPersonagem);
        const personagemDeletado = await PersonagemService.findById(idDoPersonagem);
        expect(personagemDeletado).toBeNull();
    });
});
