let express = require("express");
let router = express.Router();

let pessoaController = require("../controllers/pessoaController");

router.post("/cadastrar", function (req, res) {
    pessoaController.cadastrar(req, res); 
});

router.post("/avaliar/:idPessoa", function (req, res) {
    pessoaController.avaliar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    pessoaController.listar(req, res);
});

router.delete("/deletar/:idPessoa", function (req, res) {
    pessoaController.deletar(req, res);
});

router.put("/editar/:idPessoa", function (req, res) {
    pessoaController.editar(req, res);
});

module.exports = router;