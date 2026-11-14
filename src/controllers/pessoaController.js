let pessoaModel = require("../models/pessoaModel");

function listar(req, res){
    let idUsuario = req.params.idUsuario;
    
    if (idUsuario == undefined){
        res.status(400).send("O id do usuário está indefined!");
    } else {
        pessoaModel.listar(idUsuario).then(function(resultado) {
                if (resultado.length > 0){
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhuma pessoa encontrada!!");
                }
            })

        .catch(function (erro){
            console.log("Houve um erro ao listar as pessoas! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
}

module.exports = {
    listar
};