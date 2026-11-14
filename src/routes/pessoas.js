let express = require("express");
let router = express.Router();

let pessoaController = require("../controllers/pessoaController");

router.post("/cadastrar", function (req, res) {
    pessoaController.cadastrar(req, res); 
});

router.get("/listar/:idUsuario", function (req, res){
    pessoaController.listar(req, res);
});

module.exports = router;