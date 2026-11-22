let database = require('../database/config.js');

function buscarKpis(idUsuario) {
    let instrucaoSql = `
        SELECT 
            COUNT(id) AS total,
            ROUND(AVG(forca)) AS media
        FROM vw_elos
        WHERE fk_usuario = ${idUsuario};
    `;
    
    console.log('Executando a instrução SQL: \n' + instrucaoSql);
    
    return database.executar(instrucaoSql);
}

function buscarAtencao(idUsuario) {
    let instrucaoSql = `
        SELECT COUNT(id) AS atencao
        FROM vw_elos
        WHERE fk_usuario = ${idUsuario} 
            AND forca < 50;
    `;
        
    console.log('Executando a instrução SQL: \n' + instrucaoSql);
    
    return database.executar(instrucaoSql);
}

function buscarMaisPerto(idUsuario) {
    let instrucaoSql = `
        SELECT nome, vinculo, forca
        FROM vw_elos
        WHERE fk_usuario = ${idUsuario}
        ORDER BY forca DESC
        LIMIT 1;
    `;

    console.log('Executando a instrução SQL: \n' + instrucaoSql);

    return database.executar(instrucaoSql);
}

function buscarFracos(idUsuario) {
    let instrucaoSql = `
        SELECT nome, vinculo, grupo, forca, foto
        FROM vw_elos
        WHERE fk_usuario = ${idUsuario}
        ORDER BY forca ASC
        LIMIT 3;
    `;

    console.log('Executando a instrução SQL: \n' + instrucaoSql);

    return database.executar(instrucaoSql);
}

function buscarPilares(idUsuario) {
    let instrucaoSql = `
        SELECT
            ROUND(AVG(convivencia)) AS convivencia,
            ROUND(AVG(confianca)) AS confianca,
            ROUND(AVG(apoio)) AS apoio
        FROM vw_elos
        WHERE fk_usuario = ${idUsuario};
    `;

    console.log('Executando a instrução SQL: \n' + instrucaoSql);

    return database.executar(instrucaoSql);
}

function buscarGrupos(idUsuario) {
    let instrucaoSql = `
        SELECT
            grupo,
            ROUND(AVG(forca)) AS media
        FROM vw_elos
        WHERE fk_usuario = ${idUsuario}
        GROUP BY grupo
        ORDER BY media DESC;
    `;

    console.log('Executando a instrução SQL: \n' + instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    buscarKpis,
    buscarAtencao,
    buscarMaisPerto,
    buscarFracos,
    buscarPilares,
    buscarGrupos
}