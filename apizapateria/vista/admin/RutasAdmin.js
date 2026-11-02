const express = require("express");

const LRutas = require("../../controlador/admin/LoginAdminControlador"); // RF03
const PRutas = require("../../controlador/admin/RegistrarProductoAdminControlador"); // RF04
const ERutas = require("../../controlador/admin/EliminarProductoAdminControlador"); // RF06

const router = express.Router();

router.post("/seguridad/login", LRutas.validarCredencial); // RF03
router.post("/seguridad/productos", PRutas.registrarProducto); // RF04
router.delete("/api/admin/productos/:id", ERutas.eliminarProducto); // RF06

module.exports = router;