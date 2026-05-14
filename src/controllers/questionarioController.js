const { json } = require("express");
var questionarioModel = require("../models/questionarioModel");
var usuarioModel = require("../models/usuarioModel")

function listarPerguntas(req, res) {
    questionarioModel.listarPerguntas()
        .then(function (resultado) {
            let listaPerguntas = {};

            for (let i = 0; i < resultado.length; i++) {
                let linha = resultado[i];

                if (!listaPerguntas[linha.pergunta_id]) {
                    listaPerguntas[linha.pergunta_id] = {
                        id: linha.pergunta_id,
                        pergunta: linha.pergunta,
                        tema: linha.tema_nome,
                        listaOpcoes: []
                    };
                }
                let opcaoAtual = {
                    id: linha.opcao_id,
                    opcao: linha.opcao,
                    pontos: linha.pontos
                };

                listaPerguntas[linha.pergunta_id].listaOpcoes.push(opcaoAtual);
            }

            let jsonResposta = Object.values(listaPerguntas);

            res.json(jsonResposta);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao listar as perguntas! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrarPontos(req, res) {
    var pontos_atividade_fisica = req.body.pontosAtividadeFisicaServer;
    var pontos_mobilidade = req.body.pontosMobilidadeServer;
    var pontos_saude_mental = req.body.pontosSaudeMentalServer;
    var pontos_qualidade_sono = req.body.pontosQualidadeSonoServer;
    var pontos_alimentacao = req.body.pontosAlimentacaoServer;
    var pontos_conexao_familiar = req.body.pontosConexaoFamiliarServer;
    var idUsuario = req.body.idUsuarioServer;

    if (pontos_atividade_fisica == undefined) {
        res.status(400).send("Seus pontos de atividade física estão undefined!");
    } else if (pontos_mobilidade == undefined) {
        res.status(400).send("Seus pontos de mobilidade estão undefined!");
    } else if (pontos_saude_mental == undefined) {
        res.status(400).send("Seus pontos de saúde mental estão undefined!");
    } else if (pontos_qualidade_sono == undefined) {
        res.status(400).send("Seus pontos de qualidade de sono estão undefined!");
    } else if (pontos_alimentacao == undefined) {
        res.status(400).send("Seus pontos de alimentação estão undefined!");
    } else if (pontos_conexao_familiar == undefined) {
        res.status(400).send("Seus pontos de conexão familiar estão undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O ID do usuário está undefined!");
    }
    else {
        questionarioModel.cadastrarPontos(
            pontos_atividade_fisica,
            pontos_mobilidade,
            pontos_saude_mental,
            pontos_qualidade_sono,
            pontos_alimentacao,
            pontos_conexao_familiar,
            idUsuario
        )
            .then(
                function (resultadoCadastrarPontos) {
                    res.json(resultadoCadastrarPontos);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao cadastrar os pontos! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );

    }
}

function listarPontos(req, res) {
    var fkUsuario = req.params.idUsuario;
    let limiteLinhas = 6;

    if (fkUsuario == undefined) {
        res.status(400).send("O ID do usuário está undefined!");
    } else {
        questionarioModel.listarPontos(fkUsuario, limiteLinhas)
            .then(
                function (resultadoListar) {
                    res.json(resultadoListar);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao listar os pontos! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    listarPerguntas,
    cadastrarPontos,
    listarPontos
};
