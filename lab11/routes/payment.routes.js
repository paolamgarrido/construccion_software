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

const unsuccessful_payment = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Blissful Store Payment</title>

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
                    <h1>Congratulations! Your Payment Was Successful!</h1>
                    <p class = "text-justify">
                    We're sorry, but it seems there was an issue processing your payment. If you're experiencing difficulties, please double-check your payment information and try again. 
                    If the problem persists, you can reach out to our support team at blissful@gmail.com for further assistance.
                    </p>
                    <p>
                    In the meantime, why not explore more of our products? We have a wide selection of items that you might love.
                    </p>
                    <a href="/" class="btn btn-dark px-5 py-3 mb-5" data-product="Go Home">Go Home</a>
                </div>
                <div class="col-md-5 col-sm-12">
                   <img src="https://cdn.accentuate.io/7513373835441/1697837112879/400-x-400-blender_1.jpg?v=1697837112879" alt="Photo Continue Shopping" class = "medium-image" />
                </div>    
            </div>
        </div>
    </section>
</body>
</html>
`; 

const successful_payment = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Blissful Store Payment</title>

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
                    <h1>Congratulations! Your Payment Was Successful!</h1>
                    <p class = "text-justify">
                    Thank you for your purchase! We're thrilled to have you as our customer. Our team is already working on processing your order. 
                    </p>
                    <p>
                    In the meantime, why not explore more of our products? 
                    </p>
                    <a href="/" class="btn btn-dark px-5 py-3 mb-5" data-product="Continue Shopping">Continue Shopping</a>
                </div>
                <div class="col-md-5 col-sm-12">
                   <img src="https://cdn.accentuate.io/7513373835441/1697837116975/400-x-400-blender_2.jpg?v=1697837116975" alt="Photo Continue Shopping" class = "medium-image" />
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
        <form action="/payment" method="POST">
            <label class="label" for="name">Name on Card</label>
            <input class="input text" id="name" name="name" required>
            
            <label class="label" for="cardNumber">Card Number</label>
            <input class="input text" id="cardNumber" name="cardNumber" required>
            
            <div class="row">
                <div class="col">
                    <label class="label" for="expirationMonth">Expiration Month</label>
                    <input class="input text" id="expirationMonth" name="expirationMonth" required>
                </div>
                <div class="col">
                    <label class="label" for="expirationYear">Expiration Year</label>
                    <input class="input text" id="expirationYear" name="expirationYear" required>
                </div>
            </div>
            
            <label class="label" for="cvv">CVV</label>
            <input class="input text" id="cvv" name="cvv" required>
            
            <br><br>
            <input class="button is-success" type="submit" value="Pay Now">
        </form>
        `;
    response.send(html);
});

router.post('/', (request, response) => {
    const { name, cardNumber, expirationMonth, expirationYear, cvv } = request.body; 
    const paymentData = `Name on Card: ${name}\nCard Number: ${cardNumber}\nExpiration Month: ${expirationMonth}\nExpiration Year: ${expirationYear}\nCVV: ${cvv}\n\n`;

    fs.appendFile('payment_data.txt', paymentData, (err) => {
        if (err) {
            console.error('Error al guardar los datos de pago:', err);
            response.status(500).send(unsuccessful_payment);
        } else {
            console.log('Datos de pago guardados correctamente.');
            response.send(successful_payment);
        }
    });
});

module.exports = router;