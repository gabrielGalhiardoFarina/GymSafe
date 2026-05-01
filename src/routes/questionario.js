var express = require('express');
var router = express.Router();

var questionarioController = require('../controllers/questionarioController');

router.get('/listar/perguntas', function (req, res) {
    questionarioController.listarPerguntas(req, res);
});

router.post('/cadastrar/pontos', function (req, res) {
    questionarioController.cadastrarPontos(req, res);
});


router.post('/listar/pontos', function (req, res) {
    questionarioController.listarPontos(req, res);
});

    

module.exports = router;