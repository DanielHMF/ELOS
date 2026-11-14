let database = require('../database/config.js');

function listar(idUsuariio){
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
    listar
}