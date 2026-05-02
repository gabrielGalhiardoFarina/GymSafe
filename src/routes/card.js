var express = require('express');
var router = express.Router();

var cardController = require('../controllers/cardController');

router.get('/listar', function (req, res) {
    cardController.listarCartas(req, res);
});

module.exports = router;
