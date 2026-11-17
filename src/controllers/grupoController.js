let grupoModel = require("../models/grupoModel");

function listar(req, res) {
    let idUsuario = req.params.idUsuario 

    if (idUsuario == undefined) {
        res.status(400).send('O id do usuário está undefined!');
    } else {
        grupoModel.listar(idUsuario)
        .then(function (resultado) {
            req.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log('Houve um erro ao listas os grupos! Erro: ', erro.slqMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
}