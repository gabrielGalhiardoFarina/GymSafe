var express = require('express');
var router = express.Router();

var questionarioController = require('../controllers/questionarioController');

router.get('/listar/perguntas', function (req, res) {
    questionarioController.listarPerguntas(req, res);
});

router.post('/cadastrar/respostas/:idUsuario', function (req, res) {
    questionarioController.cadastrarRespostas(req, res);
});


router.get('/listar/respostas/:idUsuario', function (req, res) {
    questionarioController.listarRespostas(req, res);
});

    

module.exports = router;