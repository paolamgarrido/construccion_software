const express = require('express');

const router = express.Router();

const FAQ = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/9b40f91bc0.js" crossorigin="anonymous"></script>
    <title>Blissful Store Recipes</title>

    <style>
        /* NAVEGATION BAR */

        .navbar-brand {
            margin-left: 20px; 
        }

        .navbar-nav {
            margin-left: auto; /* Push navigation links to the right */
        }

        .navbar-nav a:not(:last-child) {
            margin-right: 20px; 
        }

        .navbar-nav a:last-child {
            margin-right: 30px; 
        }

        .navbar-nav button.nav-link {
            padding: 10px 20px; /* Adjust padding to increase clickable area of cart */
        }

        /*SECTION*/
        .section-1 h1{
            padding-top: 60px;
            padding-bottom: 60px;
        }

        .section-1{
            padding-top: 60px; 
            padding-bottom: 60px; 
            padding-right: 60px;
            padding-left: 60px;
        }

        .section-1 h3{
            padding-bottom: 30px;
        }

        .section-1 p{
            padding-bottom: 10px;
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
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <i class="fas fa-leaf fa-1x mx-1"></i> Blissful </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link" href="/recipes">Recipes</i></a>
                  <a class="active nav-link" href="/FAQ">FAQ</i></a>
                  <a class="nav-link" href="/contactus">Contact Us</i></a>
                  <!-- Cart button to hide or make visible the cart information -->
                  <button class="nav-link" onclick="toggleCart()"><i class="fas fa-shopping-cart"></i></button>
                </div>
              </div>
            </div>
          </nav>
    </header>
    <section class="section-1"> 
        <h1>Description of package.json</h1>
        <p>The <code>package.json</code> file is a fundamental configuration file in Node.js projects. It contains metadata about the project, such as its name, version, description, startup scripts, dependencies, and other relevant information for project management.</p>
        <p>Here's a description of some common fields within a <code>package.json</code> file:</p>
        <ol>
            <li><strong>name:</strong> The name of the package or project.</li>
            <li><strong>version:</strong> The current version of the package or project.</li>
            <li><strong>description:</strong> A brief description of the package or project.</li>
            <li><strong>main:</strong> The main entry point of the package.</li>
            <li><strong>scripts:</strong> An object defining startup scripts and tasks for building, testing, etc.</li>
            <li><strong>dependencies:</strong> An object listing project dependencies necessary for runtime in production.</li>
            <li><strong>devDependencies:</strong> An object similar to <code>dependencies</code>, but for dependencies only needed during development (testing, compilation, etc.).</li>
            <li><strong>keywords:</strong> An array of keywords describing the package or project.</li>
            <li><strong>author:</strong> The person or entity who created and maintains the package or project.</li>
            <li><strong>license:</strong> The license under which the package or project is distributed.</li>
            <li><strong>repository:</strong> The URL of the project's source code repository.</li>
            <li><strong>engines:</strong> Specifies the minimum versions of Node.js and npm required to run the project.</li>
        </ol>
        <p>The <code>package.json</code> file is essential for managing dependencies, configuring the development environment, and automating tasks in Node.js projects.</p>
    </section>
</body>
</html>
`; 

router.get('/', (request, response, next) => {
    let html = FAQ;
    response.send(html);
});

module.exports = router;