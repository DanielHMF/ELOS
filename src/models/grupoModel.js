let database = require("../database/config.js")

function cadastrar(nome, idUsuario) {
    let instrucaoSql = `
        INSERT INTO grupo (nome, fk_usuario)
        VALUES ('${nome}', ${idUsuario});
    `;    

    console.log('Executando a instrução sql \n' + instrucaoSql);

    return database.executar(instrucaoSql);
}

function listar(idUsuario) {
    let instrucaoSql = `
        SELECT id, nome
        FROM grupo
        WHERE fk_usuario IS NULL
            OR fk_usuario = ${idUsuario}
        ORDER BY id;
    `;

    console.log('Executando a instrução SQL: \n' + instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    cadastrar
}