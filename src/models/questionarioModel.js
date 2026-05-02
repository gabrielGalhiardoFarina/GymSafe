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

function casdastrarPontos(pontos_atividade_fisica, pontos_mobilidade, pontos_saude_mental, pontos_qualidade_sono, pontos_alimentacao, pontos_conexao_familiar, idUsuario) {
    console.log("ACESSEI O QUESTIONARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarPontos():", pontos_atividade_fisica, pontos_mobilidade, pontos_saude_mental, pontos_qualidade_sono, pontos_alimentacao, pontos_conexao_familiar, idUsuario);
    var limparPontos = `
        DELETE FROM pontos
        WHERE fkUsuario = ${idUsuario};
    `;

    var instrucaoSql = `
        INSERT INTO pontos (nome, valor, fkUsuario)
        VALUES
            ('atividade_fisica', ${pontos_atividade_fisica}, ${idUsuario}),
            ('mobilidade', ${pontos_mobilidade}, ${idUsuario}),
            ('saude_mental', ${pontos_saude_mental}, ${idUsuario}),
            ('qualidade_sono', ${pontos_qualidade_sono}, ${idUsuario}),
            ('alimentacao', ${pontos_alimentacao}, ${idUsuario}),
            ('conexao_familiar', ${pontos_conexao_familiar}, ${idUsuario});
    `;

    console.log("Executando a instrução SQL: \n" + limparPontos + "\n" + instrucaoSql);
    return database.executar(limparPontos)
        .then(function () {
            return database.executar(instrucaoSql);
        });
}

function listarPontos(idUsuario) {
    console.log("ACESSEI O QUESTIONARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPontos()");
    var instrucaoSql = `
        SELECT * FROM pontos
        WHERE fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    casdastrarPontos,
    listarPerguntas,
    listarPontos
};
