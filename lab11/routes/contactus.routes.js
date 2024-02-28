const express = require('express');

const router = express.Router();

const fs = require('fs');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));


const css_form = `
<style>
body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-image: url('https://juiceladycherie.com/wp-content/uploads/2021/09/20210730_Nama_J2Launch_%C2%A9AudreyMa_0110-Edit-2048x1365.jpg'); 
    background-size: cover; 
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    height: 100vh; /* Take the full height of the viewport */
} 

form {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%; /* Ensure the form takes full width */
}

.label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

.button {
    width: 100%;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}

.button:hover {
    background-color: #45a049;
}

</style>           
`; 

const unsuccessful_form = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Blissful Store Form Error</title>

    <style>
    .section-1{
            padding-top: 60px; 
            padding-bottom: 60px; 
        }

        .section-1 h1, p{
            padding-bottom: 30px;
        }

        .text-justify{
            text-align: justify;
        }

        .medium-image {
            width: 450px;
            height: auto; 
            padding-top: 20px; 
            padding-bottom: 40px;
        }
    </style>
</head>
<body>
    <section class="section-1">
        <div class="container text-center section-padding">
            <div class="row">
                <div class="col-md-7 col-sm-12 align-self-center">
                    <h1>There was a problem sending your form.</h1>
                    <p class = "text-justify">
                        Thank you for reaching out to us! Unfortunately, there was an issue processing your message. Please try again later or contact us through email at blissful@gmail.com. We apologize for any inconvenience caused.
                        In the meantime, feel free to continue browsing our products.
                    </p>
                    <a href="/" class="btn btn-dark px-5 py-3 mb-5" data-product="Continue Shopping">Continue Shopping</a>
                </div>
                <div class="col-md-5 col-sm-12">
                   <img src="https://cdn.accentuate.io/7513373835441/1697837115595/400-x-400-juicer_2.jpg?v=1697837115595" alt="Photo Continue Shopping" class="medium-image" />
                </div>    
            </div>
        </div>
    </section>
</body>
</html>
`; 

const successful_form = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Blissful Store Form</title>

    <style>
    .section-1{
            padding-top: 60px; 
            padding-bottom: 60px; 
        }

        .section-1 h1, p{
            padding-bottom: 30px;
        }

        .text-justify{
            text-align: justify;
        }

        .medium-image {
            width: 450px;
            height: auto; 
            padding-top: 20px; 
            padding-bottom: 40px;
        }
    </style>
</head>
<body>
    <section class = "section-1">
        <div class ="container text-center section-padding">
            <div class ="row">
                <div class="col-md-7 col-sm-12 align-self-center">
                    <h1>Your form was sent successfully!</h1>
                    <p class = "text-justify">
                        Thank you for reaching out to us! We have received your message and will get back to you as soon as possible.
                        In the meantime, feel free to continue browsing our products.
                    </p>
                    <a href="/" class="btn btn-dark px-5 py-3 mb-5" data-product="Continue Shopping">Continue Shopping</a>
                </div>
                <div class="col-md-5 col-sm-12">
                   <img src="https://cdn.accentuate.io/7513373835441/1697837111923/400-x-400-juicer_1.jpg?v=1697837111923" alt="Photo Continue Shopping" class = "medium-image" />
                </div>    
            </div>
        </div>
    </section>
</body>
</html>
`; 

router.get('/', (request, response, next) => {
    let html = css_form;
    html += `
        <form action="/contactus" method="POST">
            <label class="label" for="name">Name</label>
            <input class="input text" id="name" name="name" required>
            
            <label class="label" for="email">Email</label>
            <input type="email" class="input text" id="email" name="email" required>
            
            <label class="label" for="message">Message</label>
            <textarea class="input text" id="message" name="message" rows="6" required></textarea>
            
            <br><br>
            <input class="button is-success" type="submit" value="Send">
        </form>
        `;
    response.send(html);
});

router.post('/', (request, response) => {
    const { name, email, message } = request.body; // Extract form data using body-parser

    const contactData = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;

    fs.appendFile('contact_data.txt', contactData, (err) => {
        if (err) {
            console.error('Error al guardar los datos de contacto:', err);
            let html = unsuccessful_form;
            response.status(500).send(unsuccessful_form);
        } else {
            console.log('Datos de contacto guardados correctamente.');
            response.send(successful_form);
        }
    });
});

module.exports = router;