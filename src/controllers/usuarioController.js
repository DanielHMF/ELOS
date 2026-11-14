let usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    let email = req.body.emailServer;
    let senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.autenticar(email, senha)
            .then(function (resultadoAutenticar) {
                if (resultadoAutenticar.length == 1) {
                    res.json({
                        id: resultadoAutenticar[0].id,
                        nome: resultadoAutenticar[0].nome,
                        email: resultadoAutenticar[0].email
                    });
                } else {
                    res.status(403).send("E-mail e/ou senha inválido(s)");
                }
            })
            .catch(function (erro) {
                console.log("Houve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).send("Erro ao realizar o login");
            });
    }
}

function cadastrar(req, res) {
    let nome = req.body.nomeServer;
    let email = req.body.emailServer;
    let senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        usuarioModel.cadastrar(nome, email, senha)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log("Houve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);

                if (erro.code == "ER_DUP_ENTRY") {
                    res.status(409).send("Este e-mail já está cadastrado");
                } else {
                    res.status(500).send("Erro ao realizar o cadastro");
                }
            });
    }
}

module.exports = {
    autenticar,
    cadastrar
}