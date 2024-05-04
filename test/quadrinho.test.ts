import QuadrinhoService from '../src/Service/quadrinho.service';

describe('QuadrinhoService', () => {
    it('Deve listar quadrinhos corretamente', async () => {
        const quadrinhos = await QuadrinhoService.list();
        expect(quadrinhos).toBeDefined();
    });

    it('Deve criar um quadrinho corretamente', async () => {
        const novoQuadrinho = await QuadrinhoService.create({
            title: 'Novo Quadrinho',
            description: 'Descrição do novo quadrinho',
            dates: [],
            thumbnail: { path: 'path', extension: 'jpg' }
        });
        expect(novoQuadrinho).toBeDefined();
    });

    it('Deve atualizar um quadrinho corretamente', async () => {
        const quadrinhoAtualizado = await QuadrinhoService.update('id-do-quadrinho', {
            title: 'Quadrinho Atualizado'
        });
        expect(quadrinhoAtualizado).toBeDefined();
        expect(quadrinhoAtualizado.title).toBe('Quadrinho Atualizado');
    });

    it('Deve deletar um quadrinho corretamente', async () => {
        const idDoQuadrinho = 'id-do-quadrinho';
        await QuadrinhoService.delete(idDoQuadrinho);
        const quadrinhoDeletado = await QuadrinhoService.findById(idDoQuadrinho);
        expect(quadrinhoDeletado).toBeNull();
    });
});
