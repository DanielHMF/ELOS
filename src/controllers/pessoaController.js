let pessoaModel = require("../models/pessoaModel");

function cadastrar(req, res){
    let nome = req.body.nomeServer;
    let vinculo = req.body.vinculoServer;
    let descricao = req.body.descricaoServer;
    let foto = req.body.fotoServer;
    let convivencia = req.body.convivenciaServer;
    let confianca = req.body.confiancaServer;
    let apoio = req.body.apoioServer;
    let idUsuario = req.body.idUsuarioServer;
    
    if (nome == undefined) {
        res.status(400).send('O nome está undefined!')
    } else if (vinculo == undefined) {
        res.status(400).send('O vínculo está undefined!')
    } else if (convivencia == undefined) {
        res.status(400).send('O convivência está undefined!')
    } else if (confianca == undefined) {
        res.status(400).send('O confiança está undefined!')
    } else if (apoio == undefined) {
        res.status(400).send('O apoio está undefined!')
    } else if (idUsuario == undefined) {
        res.status(400).send('O id do usuário está undefined!')
    } else {
        pessoaModel.cadastrar(nome, vinculo, descricao, foto, idUsuario).then(function (resultadoPessoa) {
            let idPessoa = resultadoPessoa.insertId;
    
            pessoaModel.cadastrarAvaliacao(convivencia, confianca, apoio, idPessoa).then(function (resultadoAvaliacao) {
                res.status(201).json(resultadoAvaliacao);
            })
    
            .catch(function (erro){
                console.log('Houve um erro ao cadastrar a avaliação! Erro: ', erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
        })

        .catch(function (erro) {
            console.log('Houve um erro ao cadastrar a pessoa! Erro: ', erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
}

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
    cadastrar,
    listar
};