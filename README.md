<div align="center">

<img src="public/imgs/logo.svg" alt="Logo do ELOS" width="80">

# ELOS

**Família é quem fica perto. O ELOS mostra quem está.**

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-1f6fb2)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=white)

</div>

---

## 💙 Sobre o projeto

Família nem sempre é só sangue: é quem a gente escolhe manter por perto. Na correria do dia a dia, porém, nem sempre percebemos quem está próximo e de quem estamos nos afastando.

O **ELOS** nasceu para deixar isso visível. Nele, você cadastra as pessoas que são importantes para você, avalia cada relação e vê essas pessoas em um mapa, com você no centro.

Este é meu projeto individual do curso de Análise e Desenvolvimento de Sistemas da **SPTech** (2026/2).

## ✨ Como funciona

1. **Crie sua conta** e faça login.
2. **Cadastre as pessoas** importantes para você e escolha um grupo: Família, Amigos, Faculdade, Trabalho ou um grupo seu.
3. **Dê notas de 0 a 100** para convivência, confiança e apoio.
4. **Descubra a Força do Elo**, a média dessas três notas.
5. **Acompanhe a dashboard:** quanto maior a força, mais perto de você a pessoa aparece no mapa.
6. **Reavalie quando a relação mudar:** o ELOS guarda o histórico e usa sempre a avaliação mais recente.

## 🖥️ Telas

| Área pública | Área logada |
| --- | --- |
| Institucional (`index.html`) | Dashboard (`dash.html`) |
| Cadastro (`cadastro.html`) | Pessoas (`pessoas.html`) |
| Login (`login.html`) | Perfil (`perfil.html`) |

Os protótipos das telas estão em [`docs/prototipos/`](docs/prototipos/).

## 🛠️ Tecnologias

- HTML, CSS e JavaScript
- Node.js com Express (arquitetura do web-data-viz)
- MySQL em uma VM Lubuntu (VirtualBox)
- Chart.js

## 📁 Estrutura de pastas

```text
ELOS/
├── app.js                  # inicia o servidor e liga as rotas
├── package.json
├── AGENTS.md               # regras do projeto para assistentes de IA
├── docs/                   # documentação do projeto
│   ├── ELOS_Documentacao_do_Projeto.docx
│   ├── diario_de_prompts.md
│   ├── modelagem/          # modelagem do banco
│   └── prototipos/         # protótipos das telas
├── public/                 # o que roda no navegador
│   ├── css/                # geral.css, site.css e sistema.css
│   ├── imgs/               # logo, ícones e imagens
│   └── *.html              # telas públicas e logadas
└── src/                    # API
    ├── routes/             # recebe a URL e chama o controller
    ├── controllers/        # confere os dados e devolve a resposta
    ├── models/             # monta e executa o SQL
    └── database/           # conexão e script do banco
```

## 🚀 Como rodar

```bash
git clone https://github.com/DanielHMF/Projeto-Individual.git
cd Projeto-Individual
npm install
```

Execute `src/database/script-tabelas.sql` no MySQL e crie o arquivo `.env.dev` na raiz do projeto:

```text
AMBIENTE_PROCESSO=desenvolvimento

DB_HOST=
DB_DATABASE=elos
DB_USER=
DB_PASSWORD=
DB_PORT=

APP_PORT=
APP_HOST=
```

> No meu computador o banco roda numa VM: a porta 3307 do computador é encaminhada para a 3306 da VM, então `DB_PORT=3307`.

Depois, rode o projeto:

```bash
npm run dev
```

## 📄 Documentação

- [Documentação do projeto (Word)](docs/ELOS_Documentacao_do_Projeto.docx)
- [Diário de Prompts](docs/diario_de_prompts.md)

## 👤 Autor

Feito por **Daniel Henrique Matos Ferreira**.
