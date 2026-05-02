var database = require('../database/config');

async function listarCartas() {
    console.log('ACESSEI O CARD MODEL');
    var instrucao = `SELECT * FROM card;`;

    var listaCards = await database.executar(instrucao);
    var resultado = [];
    
    for (var i = 0; i < listaCards.length; i++) {
        var cardBruto = listaCards[i];
        var beneficios = await database.executar(`SELECT nome, valor FROM beneficio WHERE fkCard = ${cardBruto.id};`);
        var custos = await database.executar(`SELECT nome, valor FROM custo WHERE fkCard = ${cardBruto.id};`);
        
        var card = {
            id: cardBruto.id,
            status: cardBruto.status,
            imagem: cardBruto.imagem,
            titulo: cardBruto.titulo,
            descricao: cardBruto.descricao,
            listaBeneficios: beneficios,
            listaCustos: custos
        };
        
        resultado.push(card);
    }
    
    return resultado;
}

module.exports = {
    listarCartas
};
