<div align="center">

# 🔗 ELO

**Família é quem fica perto. O ELO mostra quem está.**

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-c2410c)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=white)

</div>

---

## 💛 Sobre o projeto

Família nem sempre é só sangue: é quem a gente escolhe manter por perto. Na correria do dia a dia, porém, nem sempre percebemos quem está próximo e de quem estamos nos afastando.

O **ELO** nasceu para deixar isso visível. Nele, você cadastra as pessoas que são ou já foram importantes para você, responde algumas perguntas sobre cada relação e vê sua família ao seu redor, com você no centro.

Este é meu projeto individual do curso de Análise e Desenvolvimento de Sistemas da **SPTech**.

## ✨ Como funciona

1. **Crie sua conta** e faça login.
2. **Cadastre as pessoas** importantes para você.
3. **Responda 3 perguntas** sobre convivência, confiança e apoio.
4. **Descubra a Força do Elo**, uma nota de 0 a 100.
5. **Veja o dashboard:** quanto maior a nota, mais perto de você a pessoa aparece.

## 🖥️ Telas

| Área pública | Área logada |
| --- | --- |
| Home | Cadastro de família |
| Cadastro | Cards |
| Login | Dashboard |
| | Perfil |

## 🛠️ Tecnologias

- HTML, CSS e JavaScript
- Node.js com Express
- MySQL em uma VM Linux
- Chart.js

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
DB_DATABASE=
DB_USER=
DB_PASSWORD=
DB_PORT=

APP_PORT=
APP_HOST=
```

Depois, rode o projeto:

```bash
npm run dev
```

## 👤 Autor

Feito por **Daniel Henrique Matos Ferreira**.
