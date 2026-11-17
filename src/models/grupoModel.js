function listar(idUsuario) {
    let instrucaoSql = `
        SELECT id, nome, descricao
        FROM grupo
        WHERE fk_usuario IS NULL
            OR fk_usuario = ${idUsuario}
        ORDER BY id;
    `;

    console.log('Executando a instrução SQL: \n' + instrucaoSql);

    return database.executar(instrucaoSql);
}