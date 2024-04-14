const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const path = require('path');
const rutas = require('./rutas/ruta');

// Configuración de Express
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'vistas'));
app.use(express.static(path.join(__dirname, 'public')));

// Usar las rutas definidas en el archivo rutas.js
const rutaCuenta= require('./rutas/ruta');
app.use(rutaCuenta); 
  
app.listen(4000);