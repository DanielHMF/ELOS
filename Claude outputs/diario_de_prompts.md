# Diário de Prompts – ELOS

- **Aluno:** Daniel Henrique Matos Ferreira – RA 01262123
- **Assistente:** Claude (Anthropic), usado no app do Claude dentro de um Project

> As linhas com data "a confirmar" são de conversas que eu ainda não exportei. O conteúdo delas vem das decisões que registrei ao longo do projeto. Falta colocar o dia exato de cada uma.

| Data | Assistente | O que pedi | O que usei | O que mudei |
|---|---|---|---|---|
| 02/11/2026 | Claude | Ajuda para começar do zero um projeto com o tema Família, a partir da minha Linha da Vida e do repositório no GitHub | Nada direto. A proposta "Ponto de Encontro" e as alternativas sugeridas não foram usadas | Apresentei minha própria ideia de telas na mensagem seguinte |
| 02/11/2026 | Claude | Ajuda para lapidar a ideia do projeto com base no material dos professores | A ideia de calcular a proximidade a partir de perguntas | As telas (home, cadastro, login, pessoas, cards, dashboard, perfil) foram ideia minha. Decidi que o projeto não usa nada de fora |
| 02/11/2026 | Claude | Ideias de nomes e as 3 perguntas para calcular a proximidade | As 3 perguntas (convivência, confiança e apoio) como base | Recusei o nome "Ponto de Encontro". Deixei grupos e último contato como desejáveis |
| 02/11/2026 | Claude | Criação da documentação do projeto, trazendo as decisões importantes para mim | O documento "ELO — Documentação do Projeto Individual" | Escolhi o nome ELO, que não estava entre os sugeridos, e mudei a pontuação para 0 a 100 |
| 02/11/2026 | Claude | Aplicar minhas decisões na documentação e levantar as tasks para o Trello | A documentação atualizada e o plano de trabalho para organizar o Trello | Respostas livres de 0 a 100 com média, grupo e parentesco livres, campo de descrição, incluir pessoas que já faleceram, senha sem criptografia |
| 02/11/2026 | Claude | Preenchimento do AGENTS.md seguindo o modelo do próprio arquivo | O AGENTS.md completo, que depois pedi para reduzir | Nenhuma mudança nesta etapa. Pedi para reduzir o arquivo na mensagem seguinte sobre ele |
| 02/11/2026 | Claude | Explicação do estilo de código (var, let, const, .then) e dos arquivos .env e .gitignore | As explicações para entender o template | Decidi que eu mesmo defino o formato dos commits e corrijo as inconsistências do código |
| 02/11/2026 | Claude | Reduzir o AGENTS.md e deixar com a minha linguagem, usando o guia commit.md | O AGENTS.md reduzido, que dei como concluído | Adotei o guia de commits do material de apoio |
| 02/11/2026 | Claude | Trocar var por let no AGENTS.md | A linha alterada ("Usar let, function e .then()") | Decidi usar let no lugar de var |
| 02/11/2026 | Claude | Como tirar os arquivos .env e .env.dev do GitHub | O passo a passo com .gitignore e git rm --cached | Tirei os arquivos .env do repositório |
| 02/11/2026 | Claude | Explicação rápida dos tipos de commit | A tabela com os 8 tipos de commit | Nenhuma mudança. Foi só uma explicação |
| 02/11/2026 | Claude | Criação do Diário de Prompts | O arquivo DIARIO_DE_PROMPTS.md | Nenhuma mudança nesta etapa |
| 02/11/2026 | Claude | Lista do que ainda faltava entregar no dia | A lista (Trello, .env, README, protótipos) | Nenhuma mudança. Segui a lista na mensagem seguinte |
| 02/11/2026 | Claude | Seguir para o README e os protótipos | O rascunho do README | Montei o Trello e tirei os .env sozinho |
| 02/11/2026 | Claude | Uma descrição bonita do projeto para o README | O README com badges e seções (Sobre, Como funciona, Telas, Tecnologias, Como rodar, Autor) | Deixei os protótipos para o dia seguinte |
| 03/11/2026 | Claude | Um documento com tudo o que foi decidido até ali | O documento "ELO — Registro da Etapa 1" | Decidi criar um registro no final de cada conversa |
| 03/11/2026 | Claude | Organizar a identidade visual a partir do meu documento e criar os protótipos das telas Institucional, Cadastro e Login | O canvas com o guia de identidade (logo, paleta, tipografia, componentes) e as 3 telas ligadas entre si | Já tinha decidido a paleta Blue Serenity, as fontes Nunito e Nunito Sans e o primeiro logo da imagem. Troquei o nome de ELO para ELOS |
| 03/11/2026 | Claude | Mudar as cores das telas porque estavam claras e apagadas, com mais azul em todas as seções | As 3 telas com todas as seções em tons de azul e a nova proporção de cores no guia | Pedi que nenhuma área ficasse sem tom de azul, mantendo o ar acolhedor e sereno |
| 03/11/2026 | Claude | Enviar o canvas para o Canva como design editável | Nada. Interrompi o pedido antes da resposta | Nenhuma mudança. O pedido foi interrompido |
| a confirmar | Claude | Ideias de logotipo feitas a partir de parte da minha assinatura | O modelo 11 (o "H" com duas linhas paralelas e bolinhas em cima dos traços) | Escolhi o modelo 11 entre as opções e pedi para refazer a identidade visual com ele, mantendo a mesma estrutura das telas |
| a confirmar | Claude | Novas opções de paleta, porque achei a Blue Serenity neutra demais e sem contraste | A paleta "Gruta Azul", com o Capri como cor principal e o menu azul-noite | Tirei o turquesa e o coral da paleta e deixei só cores que combinam com ela |
| a confirmar | Claude | Protótipos da área logada | As telas Dashboard, Pessoas (cards e botão de cadastro), cadastro de pessoa e Perfil | Defini que depois do login o usuário cai na Dashboard e que a área logada tem a navbar à esquerda |
| a confirmar | Claude | Ajuda para montar a API, com o código de cada arquivo desmembrado e explicado parte por parte, dizendo quem chama cada função | As rotas, controllers e models explicados | Pedi esse formato porque senti que estava perdendo o entendimento do projeto; montei os arquivos junto e usei let no projeto todo |
| a confirmar | Claude | Ajuda com o banco: histórico de avaliações, grupos e reavaliação | A estrutura de avaliação com histórico e o back da reavaliação | Decidi que a pessoa pode ser reavaliada e a dashboard usa a avaliação mais recente. Decidi ter grupos fixos para todos e grupos criados por cada usuário |
| a confirmar | Claude | Ajuda para refazer a Dashboard do zero, já ligada ao banco | Um SELECT para cada KPI e gráfico, usando a VIEW vw_elos | Decidi não processar mais tudo no JavaScript a partir de um SELECT só. Usei VIEW porque já tinha visto em aula |
| a confirmar | Claude | O CSS das telas, entregue separado ponto por ponto | O CSS das telas | Fiz eu mesmo a estrutura HTML |
| a confirmar | Claude | Ajuda para refazer todas as telas do zero: o HTML passado bloco por bloco e o CSS com todas as linhas comentadas | O HTML por blocos e o CSS comentado e separado por blocos | Digitei o HTML eu mesmo, bloco por bloco |
| a confirmar | Claude | Primeiro, uma lista do que cada página precisava no JavaScript para eu escrever; depois, os scripts de cada página, um por um, para estudar | Os scripts que ligam as páginas à API (login, cadastro, dashboard, pessoas e perfil) | Mantive o script no final da página, como aprendi em aula, e os erros nos spans de mensagem_erro em vez de alert |
| a confirmar | Claude | Ajuda para organizar as telas logadas | A explicação sobre a pasta public/dashboard/ e o sessao.js do web-data-viz | Decidi deixar as telas soltas em public/, sem public/dashboard/ e sem sessao.js, e subir as telas no Git uma por vez |
| a confirmar | Claude | Ajuda para colocar o banco na VM Linux, seguindo a atividade de MySQL em VM da aula | O passo a passo com a VM Lubuntu no VirtualBox e a porta 3307 do computador ligada à 3306 da VM | Comecei o banco do zero na VM, sem trazer os dados do banco local |
| 22/11/2026 | Claude | Ajuda para arrumar as documentações: atualizar o diário de prompts, a documentação oficial e o README e organizar as pastas do ELOS | A pasta docs/ com diário, documentação, modelagem e protótipos; README e AGENTS.md atualizados | Nenhuma mudança nesta etapa |
| 22/11/2026 | Claude | A documentação oficial em Word editável, com capa, sumário e padrão ABNT, e o diário com todos os prompts das conversas | O arquivo ELOS_Documentacao_do_Projeto.docx | Decidi entregar a documentação em Word |
| 22/11/2026 | Claude | Um prompt para levantar as mensagens das conversas anteriores no formato do diário | O prompt-modelo | Usei o prompt nas conversas anteriores |
| 22/11/2026 | Claude | Listar todas as mensagens da primeira conversa no formato do Diário de Prompts | A lista com as 17 mensagens da primeira conversa | Nenhuma mudança nesta etapa |
| 22/11/2026 | Claude | Transformar essa lista em um Claude Doc | O documento "ELO — Diário de Prompts da Conversa 1" | Nenhuma mudança nesta etapa |
| 22/11/2026 | Claude | Acrescentar no documento do diário as mensagens da conversa sobre identidade visual | Nada. Interrompi o pedido antes de ser concluído | Nenhuma mudança. O pedido foi interrompido |
| 23/11/2026 | Claude | Montar o diário com todas as conversas, em ordem, seguindo o modelo de tabela | Esta tabela | Escolhi o formato de tabela (Data, Assistente, O que pedi, O que usei, O que mudei) |
