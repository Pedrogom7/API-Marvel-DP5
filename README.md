# API-Marvel-DP5
Desafio Profissional 5 -> API que se comunique com a API da Marvel, buscando as informações da saga: INFINITY.

Avaliação - Sagas do Universo Marvel

O Universo Marvel, repleto de super-heróis, vilões e histórias épicas, tem sido uma fonte inesgotável de entretenimento e inspiração. Com a Marvel API, você tem acesso a uma riqueza de informações sobre este universo, desde personagens até as sagas que definem eras.

Objetivo da Atividade

Nesta atividade, você irá desenvolver uma API própria que servirá como um intermediário entre a Marvel API e o usuário final. Sua API irá focar em uma saga específica do Universo Marvel, permitindo aos usuários explorar os personagens envolvidos, os quadrinhos que compõem a saga, e mais. Você irá modelar esta informação através de entidades em seu sistema, sobre as quais você implementará operações CRUD (Create, Read, Update, Delete).

As primeiras rotas de sua API serão para buscar os dados da API da Marvel e salvar em seu banco de dados. Suas outras rotas serão para consulta e manipulação em seu próprio banco de dados.
Descrição da Atividade

1. Registro na Marvel API: Obtenha sua chave de API registrando-se no Marvel Developer Portal. Esta chave permitirá que sua API faça requisições para buscar dados necessários.

2. Escolha de uma Saga: Selecione uma saga do Universo Marvel para ser o foco da sua API. Esta escolha determinará os dados que você irá buscar e disponibilizar através da sua API.

3. Modelagem das Entidades:
Personagens: Crie uma entidade Personagem para mapear os dados dos personagens que aparecem na saga escolhida. Inclua atributos como nome, descrição, e URL da imagem.

Quadrinhos (Comics): Desenvolva uma entidade Comic que armazena informações sobre os quadrinhos que fazem parte da saga, como título, descrição, data de publicação, e capa.

Criadores: Crie uma entidade Criador que represente os criadores dos quadrinhos (roteiristas, desenhistas, etc.), incluindo nome, função, e quais quadrinhos contribuíram.

4. Implementação do CRUD: Para cada uma das entidades (Personagem, Comic, Criador), implemente operações CRUD que permitam criar, ler, atualizar e deletar registros no seu sistema.

5. Rotas Auxiliares: Deverão ser criadas pelo menos 5 rotas auxiliares para complementar a funcionalidade de sua aplicação. O que cada rota irá fazer fica a seu critério.
Exemplos: Rota para listar somente os roteiristas, uma rota para buscar todas as personagens do sexo feminino de determinada sagas, uma rota para contar o total de revistas de derminada saga, e assim por diante.

6. Desenvolvimento de Testes:
Testes Automatizados: Escreva testes unitários e de integração para garantir o correto funcionamento das operações CRUD e da lógica de negócios da sua API.
Testes End-to-End (E2E): Implemente testes E2E para simular o fluxo completo de uso da sua API, desde a requisição inicial até a resposta final.
Teste de Carga: Realize um teste de carga para avaliar a performance e a estabilidade da sua API sob condições de uso elevado.

Entregáveis
Código Fonte da API: Inclua todo o código desenvolvido para a API, organizado e documentado.
Documentação das Rotas: Forneça uma documentação clara das rotas disponíveis na sua API, incluindo os métodos HTTP suportados e os formatos de requisição/resposta.
Relatórios de Testes: Apresente os resultados dos testes automatizados, E2E, e de carga, incluindo qualquer ferramenta ou abordagem utilizada para realizá-los.
A ferramenta Jest gera um relatório de cobertura de testes, sendo assim, a meta é alcançar 90% de cobertura de testes na aplicação.

Critérios de Avaliação
Completeness das operações CRUD para cada entidade.
Qualidade e cobertura dos testes implementados.
Performance e robustez da API, especialmente sob carga.
Clareza da documentação e facilidade de uso da API.

Notas Finais
Esta atividade não apenas aprofunda seu entendimento do Universo Marvel, mas também desenvolve habilidades cruciais em design de API, modelagem de dados, e testes de software. Boa sorte, e que a força dos super-heróis esteja com você!
