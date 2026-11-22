let express = require("express");
let router = express.Router();

let usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.put("/foto/:idUsuario", function (req, res) {
    usuarioController.atualizarFoto(req, res);
});

module.exports = router;