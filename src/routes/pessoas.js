let express = require("express");
let router = express.Router();

let pessoaController = require("../controllers/pessoaController");

router.get("/listar/:idUsuario", function (req, res){
    pessoaController.listar(req, res);
});

module.exports = router;