let grupoModel = require("../models/grupoModel");

function listar(req, res) {
    let idUsuario = req.params.idUsuario 

    if (idUsuario == undefined) {
        res.status(400).send('O id do usuário está undefined!');
    } else {
        grupoModel.listar(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log('Houve um erro ao listas os grupos! Erro: ', erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
}

function cadastrar(req, res) {
    let nome = req.body.nomeServer;
    let idUsuario = req.body.idUsuarioServer;

    if (nome == undefined) {
        res.status(400).send('O nome do grupo está undefined!');
    } else if (idUsuario == undefined) {
        res.status(400).send('O id do usuário está undefined!');
    } else {
        grupoModel.cadastrar(nome, idUsuario)
        .then(function (resultado) {
            res.status(201).json(resultado);
        })
        .catch(function (erro) {
            console.log('Houve um erro ao cadastrar o grupo! Erro: ', erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });        
    }
}

module.exports = {
    listar,
    cadastrar
}