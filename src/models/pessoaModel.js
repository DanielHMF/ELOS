let database = require('../database/config.js');

function cadastrar(nome, vinculo, descricao, foto, idUsuario){
    let instrucaoSql = `
        INSERT INTO pessoa (nome, vinculo, descricao, toto, fk_usuario)
        VALUES ('${nome}', '${vinculo}', '${descricao}', '${foto}', ${idUsuario});
    `;

    console.log('Executando a instrução SQL: \n' + instrucaoSql);

    return database.executar(instrucaoSql);
}

function cadastrarAvaliacao(convivencia, confianca, apoio, idPessoa){
    let instrucaoSql = `
        INSERT INTO avaliacao (convivencia, confianca, apoio, fk_pessoa) VALUES (${convivencia}, ${confianca}, ${apoio}, ${idPessoa});
    `;

    console.log('Executando a instrução SQL: \n' + instrucaoSql);

    return database.executar(instrucaoSql);
}

function listar(idUsuario){
    let instrucaoSql = `
        SELECT 
            pessoa.id,
            pessoa.nome,
            pessoa.vinculo,
            grupo.nome AS grupo,
            avaliacao.convivencia,
            avaliacao.confianca,
            avaliacao.apoio,
            ROUND((avaliacao.convivencia + avaliacao.confianca + avaliacao.apoio) / 3) AS forca
        FROM pessoa
        JOIN avaliacao
            ON avaliacao.fk_pessoa = pessoa.id
        LEFT JOIN grupo
            ON grupo.id = pessoa.fk_grupo
        WHERE pessoa.fk_usuario = ${idUsuario} 
            AND avaliacao.id = (SELECT MAX(id) FROM avaliacao WHERE fk_pessoa = pessoa.id)
        ORDER BY forca DESC;
    `;

    console.log('Executando a instrução SQL: \n' + instrucaoSql);
    
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    cadastrarAvaliacao,
    listar
}