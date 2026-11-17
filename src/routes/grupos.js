let express = require("express");
let router = express.Router();

let grupoRouter = require("../controllers/grupoController");

router.get("/listar/:idUsuario", function (req, res) {
    grupoController.listar(req,res);
});

router.post("/cadastrar", function (req, res) {
    grupoController.cadastrar(req, res);
})

module.exports = router;