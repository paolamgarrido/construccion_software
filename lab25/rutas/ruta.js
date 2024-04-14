const express = require('express');
const router = express.Router();
const transaccionesControlador = require('../controladores/controlador');

router.use('/', transaccionesControlador);


module.exports = router;
