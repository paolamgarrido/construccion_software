const express = require('express');
const router = express.Router();

const clasesController = require('../controllers/clases.controller');

router.get('/', clasesController.get_home);
module.exports = router;