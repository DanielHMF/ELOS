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

function buscarAtencao(req, res) {
    let idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else {
        dashboardModel.buscarAtencao(idUsuario)
            .then(function (resultado) {
                res.status(200).json(resultado);
            })
            .catch(function (erro) {
                console.log("Houve um erro ao buscar os elos que precisam de atenção! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function buscarMaisPerto(req, res) {
    let idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else {
        dashboardModel.buscarMaisPerto(idUsuario)
            .then(function (resultado) {
                res.status(200).json(resultado);
            })
            .catch(function (erro) {
                console.log("Houve um erro ao buscar a pessoa mais perto! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function buscarFracos(req, res) {
    let idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else {
        dashboardModel.buscarFracos(idUsuario)
            .then(function (resultado) {
                res.status(200).json(resultado);
            })
            .catch(function (erro) {
                console.log("Houve um erro ao buscar os elos mais fracos! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function buscarPilares(req, res) {
    let idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else {
        dashboardModel.buscarPilares(idUsuario)
            .then(function (resultado) {
                res.status(200).json(resultado);
            })
            .catch(function (erro) {
                console.log("Houve um erro ao buscar os pilares! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function buscarGrupos(req, res) {
    let idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else {
        dashboardModel.buscarGrupos(idUsuario)
            .then(function (resultado) {
                res.status(200).json(resultado);
            })
            .catch(function (erro) {
                console.log("Houve um erro ao buscar os grupos! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    buscarKpis,
    buscarAtencao,
    buscarMaisPerto,
    buscarFracos,
    buscarPilares,
    buscarGrupos
};