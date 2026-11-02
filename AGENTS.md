# AGENTS.md

## Visão geral

O ELO é meu projeto individual de ADS na SPTech. No site, cada usuário cadastra as pessoas que considera família, de sangue ou não, e vê o quanto está próximo de cada uma.

Cada pessoa recebe a Força do Elo, uma nota de 0 a 100. Ela é a média de 3 respostas de 0 a 100: convivência, confiança e apoio. Essa nota é calculada, não fica salva no banco.

Telas: Home, Cadastro, Login, Cadastro de família, Cards, Dashboard e Perfil.

## Tecnologias

- HTML, CSS e JavaScript
- Node.js com Express
- MySQL em uma VM Linux
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

- `public/`: páginas, CSS, imagens e scripts do navegador
- `public/dashboard/`: páginas que precisam de login
- `src/routes/`: recebe a URL e chama o controller
- `src/controllers/`: valida os dados e devolve a resposta
- `src/models/`: monta e executa o SQL
- `src/database/`: conexão e script do banco

Fluxo: página → `fetch` → `app.js` → rota → controller → model → banco. A resposta faz o caminho de volta até a página.

Para criar uma funcionalidade, sigo o `DOCUMENTOS_DE_APOIO/PASSO_A_PASSO_CRIAR_ROTA_NA_API.md`.

## Padrões de desenvolvimento

- Usar `let`, `function` e `.then()`
- Usar `camelCase` em variáveis e funções
- Usar `snake_case` em tabelas, colunas e ids do HTML
- Nomear arquivos como `pessoaController.js`, `pessoaModel.js` e `pessoas.js`
- Validar os formulários no JavaScript
- Commits no formato `tipo(escopo): descrição`
- Tipos de commit: `feat`, `fix`, `docs`, `style`, `perf`, `refactor`, `test` e `chore`
- Cada commit deve representar uma mudança só

Exemplo: `feat(login): adiciona validação de e-mail`

## Cuidados e restrições

- Não gerar o projeto inteiro: eu preciso entender e saber explicar o código
- Registrar o uso de IA no Diário de Prompts
- Não mudar a arquitetura nem usar tecnologias fora do material de apoio
- Não alterar `DOCUMENTOS_DE_APOIO/`
- Não publicar senhas, arquivos `.env` ou dados pessoais reais
- Não fazer o que está nos desejáveis sem eu pedir: tabela de grupos, último contato, editar e excluir pessoa
- Me perguntar antes de qualquer decisão importante

## Regra geral: 
Antes de implementar uma alteração, siga as tecnologias, arquitetura, convenções e restrições descritas neste documento. Caso alguma informação esteja ausente, analise o código existente e siga os padrões já adotados no projeto.
