const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller');

router.get('/', usersController.get_login);

router.post('/', usersController.post_login);

router.get('/', usersController.get_logout);

module.exports = router;