const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');

const joyasController = require('../controllers/joyas.controller');

router.get('/creajoya', isAuth, joyasController.get_joyas);
router.post('/creajoya', isAuth, joyasController.post_joyas);
router.get('/joyas/:id_producto', isAuth,  joyasController.get_misjoyas);
router.get('/joyas', isAuth,  joyasController.get_misjoyas);
router.post('/delete_joya/:id', joyasController.deleteJoya);


module.exports = router;