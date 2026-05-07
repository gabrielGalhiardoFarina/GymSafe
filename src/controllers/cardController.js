var cardModel = require("../models/cardModel");

function listarCartas(req, res) {
    cardModel.listarCartas()
        .then(function (resultado) {
            let listaCard = {};

            let beneficiosAdicionados = {};
            let custosAdicionados = {};

            for (let i = 0; i < resultado.length; i++) {
                let linha = resultado[i];

                if (!listaCard[linha.card_id]) {
                    listaCard[linha.card_id] = {
                        id: linha.card_id,
                        status: linha.status,
                        imagem: linha.imagem,
                        titulo: linha.titulo,
                        descricao: linha.descricao,
                        listaBeneficios: [],
                        listaCustos: []
                    };
                }

                if (linha.beneficio_id != null) {
                    if (!beneficiosAdicionados[linha.beneficio_id]) {
                        listaCard[linha.card_id].listaBeneficios.push({
                            id: linha.beneficio_id,
                            nome: linha.beneficio_nome,
                            valor: linha.beneficio_valor
                        });

                        beneficiosAdicionados[linha.beneficio_id] = true;
                    }
                }

                if (linha.custo_id != null) {
                    if (!custosAdicionados[linha.custo_id]) {
                        listaCard[linha.card_id].listaCustos.push({
                            id: linha.custo_id,
                            nome: linha.custo_nome,
                            valor: linha.custo_valor
                        });

                        custosAdicionados[linha.custo_id] = true;
                    }
                }
            }

            let jsonResposta = Object.values(listaCard);

            res.status(200).json(jsonResposta);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage || erro);
        });
}

module.exports = {
    listarCartas
};