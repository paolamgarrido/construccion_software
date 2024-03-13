const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller');

router.get('/logout', usersController.get_logout);

router.get('/signup', usersController.get_signup);
router.post('/signup', usersController.post_signup);

router.get('/', usersController.get_login);

router.post('/', usersController.post_login);


module.exports = router;