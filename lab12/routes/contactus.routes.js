const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

const contactData = [];

router.get('/', (request, response, next) => {
    response.render('contactusform');
});

router.post('/', (request, response) => {
    const { name, email, message } = request.body; // Extract form data using body-parser

    try {
        // Attempt to push the form data into the contactData array
        contactData.push({ name, email, message });
        console.log('Datos de contacto guardados correctamente.');
        response.render('successful_form', { contactData });
    } catch (err) {
        // If an error occurs, log the error and render the unsuccessful form
        console.error('Error al guardar los datos de contacto:', err);
        response.status(500).render('unsuccessful_form', { contactData });
    }
});

module.exports = router;
