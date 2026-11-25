let dashModel = require("../models/dashModel");

function buscarKpis(req, res) {
    let idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else {
        dashModel.buscarKpis(idUsuario)
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
        dashModel.buscarAtencao(idUsuario)
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
        dashModel.buscarMaisPerto(idUsuario)
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
        dashModel.buscarFracos(idUsuario)
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
        dashModel.buscarPilares(idUsuario)
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
        dashModel.buscarGrupos(idUsuario)
            .then(function (resultado) {
                res.status(200).json(resultado);
            })
            .catch(function (erro) {
                console.log("Houve um erro ao buscar os grupos! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function buscarMapa(req, res) {
    let idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else {
        dashModel.buscarMapa(idUsuario)
            .then(function (resultado) {
                // sem pessoas: 204 (sem conteúdo), igual ao listar de pessoas
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhuma pessoa encontrada!");
                }
            })
            .catch(function (erro) {
                console.log("Houve um erro ao buscar as pessoas do mapa! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    buscarMapa,
    buscarKpis,
    buscarAtencao,
    buscarMaisPerto,
    buscarFracos,
    buscarPilares,
    buscarGrupos
};