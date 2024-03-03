const fs = require('fs');
const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (request, response, next) => {
    response.render('paymentform');
});


router.post('/', (request, response) => {
    const { name, cardNumber, expirationMonth, expirationYear, cvv } = request.body; 
    const paymentData = `Name on Card: ${name}\nCard Number: ${cardNumber}\nExpiration Month: ${expirationMonth}\nExpiration Year: ${expirationYear}\nCVV: ${cvv}\n\n`;

    fs.appendFile('payment_data.txt', paymentData, (err) => {
        if (err) {
            console.error('Error al guardar los datos de contacto:', err);
            response.status(500).render('unsuccessful_payment');
        } else {
            console.log('Datos de contacto guardados correctamente.');
            response.render('successful_payment');
        }
    });
});

module.exports = router;