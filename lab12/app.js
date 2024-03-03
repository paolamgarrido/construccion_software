const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
  console.log('Middleware!');
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

// Rutas 
const rutasHome = require('./routes/home.routes');
app.use('/', rutasHome);

const rutasRecipes = require('./routes/recipes.routes');
app.use('/recipes', rutasRecipes );

const rutasContact = require('./routes/contactus.routes');
app.use('/contactus', rutasContact );

const rutasPayment = require('./routes/payment.routes');
app.use('/payment', rutasPayment );

const rutasFAQ = require('./routes/FAQ.routes');
app.use('/FAQ', rutasFAQ );

// 404 Not Found handler
const notFoundRoutes = require('./routes/notfound.routes');
app.use(notFoundRoutes);

app.listen(2000);