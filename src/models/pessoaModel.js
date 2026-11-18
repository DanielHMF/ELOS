let database = require('../database/config.js');

function cadastrar(nome, vinculo, descricao, foto, idUsuario, idGrupo){
    let instrucaoSql = `
        INSERT INTO pessoa (nome, vinculo, descricao, foto, fk_usuario, fk_grupo)
        VALUES ('${nome}', '${vinculo}', '${descricao}', '${foto}', ${idUsuario}, ${idGrupo});
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
            id, 
            nome, 
            vinculo, 
            grupo, 
            convivencia, 
            confianca, 
            apoio, 
            forca 
        FROM vw_elos 
        WHERE fk_usuario = ${idUsuario} 
            ORDER BY forca DESC
    `;

    console.log('Executando a instrução SQL: \n' + instrucaoSql);
    
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    cadastrarAvaliacao,
    listar
}