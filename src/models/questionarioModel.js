var database = require("../database/config")

function listarPerguntas() {
    console.log("ACESSEI O QUESTIONARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPerguntas()");
    var instrucaoSql = `
        SELECT 
            tema.nome AS tema_nome, 
            pergunta.id AS pergunta_id,
            pergunta.pergunta, 
            opcao.id AS opcao_id,
            opcao.fkPergunta,
            opcao.opcao, 
            opcao.pontos
        FROM tema
        JOIN pergunta ON tema.id = pergunta.fkTema
        JOIN opcao ON pergunta.id = opcao.fkPergunta;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarRespostas(fkUsuario, fkOpcao) {
    console.log("ACESSEI O QUESTIONARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarRespostas():", fkUsuario, fkOpcao);

    var instrucaoSql = `
        insert into resposta (fkUsuario, fkOpcao)
        values
        (${fkUsuario}, ${fkOpcao[0]}),
        (${fkUsuario}, ${fkOpcao[1]}),
        (${fkUsuario}, ${fkOpcao[2]}),
        (${fkUsuario}, ${fkOpcao[3]}),
        (${fkUsuario}, ${fkOpcao[4]}),
        (${fkUsuario}, ${fkOpcao[5]}),
        (${fkUsuario}, ${fkOpcao[6]}),
        (${fkUsuario}, ${fkOpcao[7]}),
        (${fkUsuario}, ${fkOpcao[8]}),
        (${fkUsuario}, ${fkOpcao[9]}),
        (${fkUsuario}, ${fkOpcao[10]}),
        (${fkUsuario}, ${fkOpcao[11]}),
        (${fkUsuario}, ${fkOpcao[12]}),
        (${fkUsuario}, ${fkOpcao[13]}),
        (${fkUsuario}, ${fkOpcao[14]}),	
        (${fkUsuario}, ${fkOpcao[15]}),
        (${fkUsuario}, ${fkOpcao[16]}),
        (${fkUsuario}, ${fkOpcao[17]});
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
        
}

function listarRespostas(fkUsuario, limiteLinhas) {
    console.log("ACESSEI O QUESTIONARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarRespostas()");
    var instrucaoSql = `
         SELECT respGrup.nome AS Tema, SUM(respGrup.pontos) AS Total_Pontos
            FROM (
                SELECT t.nome, o.pontos
                FROM resposta r
                JOIN opcao o ON o.id = r.fkOpcao
                JOIN pergunta p ON p.id = o.fkPergunta
                JOIN tema t ON t.id = p.fkTema
                WHERE r.fkUsuario = ${fkUsuario}
                ORDER BY r.id DESC
                LIMIT ${limiteLinhas}
            ) AS respGrup
            GROUP BY respGrup.nome;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarRespostas,
    listarPerguntas,
    listarRespostas
};
