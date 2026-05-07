var database = require("../database/config");

function listarCartas() {
    var instrucaoSql = `
            SELECT 
                c.id AS card_id, 
                c.status, 
                c.imagem, 
                c.titulo, 
                c.descricao,
                b.id AS beneficio_id, 
                b.nome AS beneficio_nome, 
                b.valor AS beneficio_valor,
                ct.id AS custo_id, 
                ct.nome AS custo_nome, 
                ct.valor AS custo_valor
            FROM card c
            JOIN beneficio b ON c.id = b.fkCard
            JOIN custo ct ON c.id = ct.fkCard;
    `;
    
    return database.executar(instrucaoSql);
}

module.exports = {
    listarCartas
};