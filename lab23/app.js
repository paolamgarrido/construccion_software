const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware
app.use((request, response, next) => {
  console.log('Middleware!');
  next();
});

const session = require('express-session');

app.use(session({
    secret: 'mi string secreto que debería ser muy largo', 
    resave: false, 
    saveUninitialized: false,
}));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Multer

const multer = require('multer');
//fileStorage: constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'public/uploads': directorio del servidor donde se subirán los archivos 
        callback(null, 'public/uploads');
    },
    filename: (request, file, callback) => {
        // nombre que queremos que tenga el archivo en el servidor + timestamp
        callback(null, Number(new Date()).toString() + file.originalname);
    },
});
app.use(multer({ storage: fileStorage }).single('imagen')); 


//Protección contra ataques de CSRF
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
app.use(csrfProtection); 

const rutaClases= require('./routes/clases.routes');
app.use('/home',rutaClases); 

const rutaUsuarios = require('./routes/login.routes');
app.use(rutaUsuarios); 

const rutaJoyas= require('./routes/joyas.routes');
app.use(rutaJoyas); 

app.use((request, response, next) => {
  response.status(404);
  response.sendFile(path.join(__dirname,'views','404.html')); //Manda la respuesta
});

app.listen(4000);