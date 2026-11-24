# AGENTS.md

## Visão geral

O ELOS é meu projeto individual de ADS na SPTech. No site, cada usuário cadastra as pessoas que considera família, de sangue ou não, e vê o quanto está próximo de cada uma.

Cada pessoa recebe a Força do Elo, uma nota de 0 a 100. Ela é a média de 3 notas de 0 a 100: convivência, confiança e apoio. Essa nota é calculada na VIEW `vw_elos` e não fica salva no banco. As avaliações têm histórico: a pessoa pode ser reavaliada e o sistema usa a mais recente.

Telas: Institucional, Cadastro, Login, Dashboard, Pessoas e Perfil.

A documentação completa fica em `docs/ELOS_Documentacao_do_Projeto.docx`.

## Tecnologias

- HTML, CSS e JavaScript
- Node.js com Express
- MySQL em uma VM Lubuntu (VirtualBox, porta 3307 do computador → 3306 da VM)
- Chart.js

## Comandos

```bash
npm install
npm run dev
npm start
```

O ambiente é escolhido no início do `app.js`. O script do banco fica em `src/database/script-tabelas.sql`.

## Arquitetura

O projeto segue a arquitetura do web-data-viz:

- `public/`: páginas, CSS e imagens; as telas públicas e logadas ficam soltas em `public/`
- `src/routes/`: recebe a URL e chama o controller
- `src/controllers/`: valida os dados e devolve a resposta
- `src/models/`: monta e executa o SQL
- `src/database/`: conexão e script do banco
- `docs/`: documentação, diário de prompts, modelagem e protótipos

Fluxo: página → `fetch` → `app.js` → rota → controller → model → banco. A resposta faz o caminho de volta até a página.

## Padrões de desenvolvimento

- Usar `let`, `function` e `.then()`
- Usar `camelCase` em variáveis e funções
- Usar `snake_case` em tabelas, colunas e ids do HTML
- Nomear arquivos como `pessoaController.js`, `pessoaModel.js` e `pessoas.js`
- O JavaScript fica no próprio HTML, num `<script>` no final da página
- Validar os formulários no JavaScript e mostrar os erros nos `span` de `mensagem_erro`, sem `alert`
- Os dados do usuário logado ficam no `sessionStorage` (`ID_USUARIO`, `NOME_USUARIO`, `EMAIL_USUARIO`, `FOTO_USUARIO`)
- Commits no formato `tipo(escopo): descrição`
- Tipos de commit: `feat`, `fix`, `docs`, `style`, `perf`, `refactor`, `test` e `chore`
- Cada commit deve representar uma mudança só

Exemplo: `feat(login): adiciona validação de e-mail`

## Cuidados e restrições

- Não gerar o projeto inteiro: eu preciso entender e saber explicar o código
- Explicar cada trecho e dizer quem chama cada função
- Registrar o uso de IA em `docs/diario_de_prompts.md`
- Não mudar a arquitetura nem usar tecnologias fora do material de apoio
- Não publicar senhas, arquivos `.env` ou dados pessoais reais
- Me perguntar antes de qualquer decisão importante

## Regra geral

Antes de implementar uma alteração, siga as tecnologias, arquitetura, convenções e restrições descritas neste documento. Caso alguma informação esteja ausente, analise o código existente e siga os padrões já adotados no projeto.
