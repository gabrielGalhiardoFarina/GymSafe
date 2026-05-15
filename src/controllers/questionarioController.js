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

function cadastrarRespostas(req, res) {
    var fkUsuario = req.params.idUsuario;
    var listaFkOpcao = req.body.ListaFkOpcaoServer;

    if (fkUsuario == undefined) {
        res.status(400).send("O ID do usuário está undefined!");
    } else if (listaFkOpcao == undefined) {
        res.status(400).send("A lista de opções está undefined!");
    } else {
        questionarioModel.cadastrarRespostas(fkUsuario, listaFkOpcao)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao cadastrar as respostas! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function listarRespostas(req, res) {
    var fkUsuario = req.params.idUsuario;
    let limiteLinhas = 18;

    if (fkUsuario == undefined) {
        res.status(400).send("O ID do usuário está undefined!");
    } else {
        questionarioModel.listarRespostas(fkUsuario, limiteLinhas)
            .then(
                function (resultadoListar) {
                    res.json(resultadoListar);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao listar as respostas! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    listarPerguntas,
    cadastrarRespostas,
    listarRespostas
};
