let express = require("express");
let router = express.Router();

let dashController = require("../controllers/dashController");

router.get("/mapa/:idUsuario", function (req, res) {
    dashController.buscarMapa(req, res);
});

router.get("/kpis/:idUsuario", function (req, res) {
    dashController.buscarKpis(req, res);
});

router.get("/atencao/:idUsuario", function (req, res) {
    dashController.buscarAtencao(req, res);
});

router.get("/mais-perto/:idUsuario", function (req, res) {
    dashController.buscarMaisPerto(req, res);
});

router.get("/fracos/:idUsuario", function (req, res) {
    dashController.buscarFracos(req, res);
});

router.get("/pilares/:idUsuario", function (req, res) {
    dashController.buscarPilares(req, res);
});

router.get("/grupos/:idUsuario", function (req, res) {
    dashController.buscarGrupos(req, res);
});

module.exports = router;