const express = require('express');
const router = express.Router();
const path = require('path');

const joyasController = require('../controllers/joyas.controller');

router.get('/creajoya', joyasController.get_joyas);
router.post('/creajoya', joyasController.post_joyas);
router.get('/joyas', joyasController.get_misjoyas);


module.exports = router;