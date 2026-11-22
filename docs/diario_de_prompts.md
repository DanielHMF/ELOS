# Diário de Prompts – ELOS

Registro de como usei a IA no meu projeto individual, como pede o desafio: o que pedi, o que usei e o que mudei.

- **Aluno:** Daniel Henrique Matos Ferreira – RA 01262123
- **Assistente usado:** Claude (Anthropic), pelo app do Claude, num Project chamado "ELOS Daniel"
- **Como usei:** para tirar dúvidas, entender erros, revisar código e gerar trechos dentro da arquitetura do web-data-viz. As decisões do projeto foram minhas, e sempre pedi que cada arquivo viesse explicado parte por parte para eu saber explicar na banca.

> Quando não lembro o dia exato, a data aparece como "nov/2026". Os links das conversas ficam na tabela do final.

## Registro

| Data | Assistente | O que pedi | O que usei | O que mudei |
|------|------------|------------|------------|-------------|
| 02/11/2026 | Claude | Explicações sobre estilo de código, arquivos `.env`, `.gitignore` e tipos de commit. | O passo a passo para tirar os arquivos `.env` do repositório. | Coloquei os arquivos `.env` e `.env.dev` no `.gitignore`. |
| nov/2026 | Claude | Ajuda para definir o tema e o nome do projeto. | A ideia de mostrar a proximidade das pessoas como um mapa, com o usuário no centro. | Troquei o nome de ELO para **ELOS**, no plural. |
| nov/2026 | Claude | Identidade visual: fontes, logotipo e paleta de cores. | As fontes Nunito e Nunito Sans; propostas de logo feitas a partir da minha assinatura. | Escolhi o modelo 11 do logo (o "H" com duas linhas paralelas e bolinhas). Achei a paleta Blue Serenity sem contraste e escolhi a **Gruta Azul**, tirando o turquesa e o coral. |
| nov/2026 | Claude | Protótipo das telas com a nova identidade visual. | Os protótipos em PNG: Institucional, Cadastro, Login, Dashboard, Pessoas, Cadastrar pessoa e Perfil (pasta `docs/prototipos/`). | Defini que depois do login o usuário cai na Dashboard e que a área logada tem navbar à esquerda. |
| nov/2026 | Claude | Modelagem do banco de dados. | As tabelas `usuario`, `pessoa`, `avaliacao` e `grupo` e a imagem da modelagem. | Decidi que a avaliação tem histórico: a pessoa pode ser reavaliada e a dashboard usa a avaliação mais recente. Decidi ter grupos fixos para todos e grupos criados por cada usuário. |
| nov/2026 | Claude | Montar a API (rotas, controllers e models) seguindo o web-data-viz. | O código de cada arquivo desmembrado e explicado parte por parte, incluindo quem chama cada função. | Montei os arquivos junto, troquei `var` por `let` no projeto todo e pedi o back da reavaliação. |
| nov/2026 | Claude | Refazer a Dashboard do zero, já ligada ao banco. | Um SELECT para cada KPI e gráfico, usando a VIEW `vw_elos` (VIEW eu já tinha visto em aula). | Deixei de processar tudo no JavaScript a partir de um SELECT só: cada indicador tem sua própria rota (`/dash/...`). |
| nov/2026 | Claude | Refazer todas as telas do zero. | O HTML passado bloco por bloco e o CSS com todas as linhas comentadas, separado por blocos. | Digitei o HTML eu mesmo; o CSS ficou com a IA. |
| nov/2026 | Claude | Scripts que ligam as páginas à API. | Primeiro uma lista do que cada página precisava; depois pedi os scripts de cada página, um por um, para estudar. | Mantive o `<script>` no final da página, como aprendi em aula, e troquei os `alert` por mensagens nos `span` de erro. |
| nov/2026 | Claude | Funções extras da tela de Pessoas e Perfil. | Editar, excluir e reavaliar pessoa, criar grupo, ver detalhes com gráfico e trocar a foto do usuário. | Decidi manter as telas logadas soltas em `public/`, sem a pasta `public/dashboard/`, e subi as telas no Git uma por vez. |
| nov/2026 | Claude | Colocar o banco na VM Linux. | O passo a passo da atividade de MySQL em VM da aula: VM Lubuntu no VirtualBox, porta 3307 do computador ligada à 3306 da VM. | Comecei o banco do zero na VM, sem trazer os dados do banco local. |
| 22/11/2026 | Claude | Arrumar as documentações: diário de prompts, documentação oficial, README e organização das pastas. | O diário atualizado, a documentação do projeto, o README e o AGENTS.md revisados e a pasta `docs/`. | Juntei os documentos e imagens do projeto na pasta `docs/`. |

## Links das conversas

| Conversa | Link |
|----------|------|
| Configuração inicial (.env, .gitignore, commits) | |
| Identidade visual e protótipos | |
| Banco de dados e API | |
| Dashboard | |
| Telas e scripts | |
| Banco na VM | |
| Documentação (22/11) | |
