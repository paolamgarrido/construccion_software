const express = require('express');

const router = express.Router();

router.use((request, response, next) => {
    response.status(404);
    response.render('notfound');
});

module.exports = router;