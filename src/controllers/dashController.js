let dashboardModel = require("../models/dashModel");

function buscarKpis(req, res) {
    let idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else {
        dashboardModel.buscarKpis(idUsuario)
            .then(function (resultado) {
                res.status(200).json(resultado);
            })
            .catch(function (erro) {
                console.log("Houve um erro ao buscar as KPIs! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    buscarKpis
}