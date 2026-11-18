let database = require('../database/config.js');

function buscarKpis(idUsuario) {
    let instrucaSql = `
        SELECT 
            COUNT(id) AS total,
            ROUND(AVG(forca)) AS media
        FROM vw_elos
        WHERE fk_usuario = ${idUsuario};
    `
}

console.log('Executando a instrução SQL: \n' + instrucaoSql);

return database.executar(instrucaoSql);



module.exports = {
    buscarKpis
}