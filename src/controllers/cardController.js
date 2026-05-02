var cardModel = require('../models/cardModel');

function listarCartas(req, res) {
    cardModel.listarCartas()
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage || erro);
        });
}

module.exports = {
    listarCartas
};
