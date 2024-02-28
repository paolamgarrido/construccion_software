const express = require('express');

const router = express.Router();

const notfound = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Blissful 404</title>

    <style>

        /* SECTION TITLE */
        .section-title {
            min-height: 100vh; /* Set minimum height to cover the full viewport height */
            padding-top: 80px;
            padding-bottom: 40px;
        }
        .section-title h1 {
            font-size: 7rem; 
        }
        .section-title p {
            padding-top: 20px;
            padding-bottom: 42px;
        }

        .medium-image {
            width: 500px;
        }

    </style>
</head>
<body>
    <section class="section-title"> 
        <div class="container text-center">
            <h1>404</h1>
            <h3> Page Not Found</h3>
            <p>The page you are looking for doesn't exist or has been moved. </p>
            <a href="/" class="btn btn-dark px-5 py-3 mb-5" data-product="Go Home">Go Home</a>
            <br> </br>
            <img src="https://cdn.accentuate.cloud/images/14317682774/DEC_article_drinks-v1702421184186.png" alt="Drawing Fruits" class ="medium-image"/>
        </div>
    </section>
</body>
</html>
`; 

router.use((request, response, next) => {
    response.status(404);
    let html = notfound;
    response.send(html); 
});

module.exports = router;