const express = require('express');
const router = express.Router();
const db = require('../util/database');

// Manejar la solicitud GET para la página principal
router.get('/', (req, res) => {
    // Consulta SQL para obtener la información de la cuenta
    const sqlQuery = `
      SELECT clientes.nombre, cuentas.tipo_cliente, cuentas.tipo_cuenta, cuentas.numero_tarjeta, cuentas.saldo
      FROM cuentas
      JOIN clientes ON cuentas.id_cliente = clientes.id_cliente
      WHERE cuentas.id_cliente = 1`;

    // Ejecutar la consulta SQL
    db.execute(sqlQuery)
        .then(([rows, fields]) => {
            // Renderizar la vista 'home' y pasar los datos de la cuenta como variables
            res.render('home', { cuenta: rows[0] }); // Suponiendo que solo esperas un resultado
        })
        .catch(error => {
            console.error('Error al cargar la cuenta:', error);
            res.status(500).send('Error al cargar la cuenta');
        });
});


// Manejar la solicitud para depositar fondos
router.post('/depositar', (req, res) => {
    // Obtener la cantidad ingresada por el usuario desde el formulario
    const cantidad = parseFloat(req.body.cantidad);

    // Ejecutar la consulta
    db.query(
        'SELECT new_function(?, ?, ?)',
        [1, 'Depósito', cantidad],
        (error, results) => {
            if (error) {
                console.error('Error al realizar la transacción:', error);
                return;
            }
            console.log('La transacción se realizó con éxito');
            // Redirigir al usuario a la página principal
            res.redirect('/');
        }
    );
});


// Manejar la solicitud para retirar fondos
router.post('/retirar', (req, res) => {
    // Obtener la cantidad ingresada por el usuario desde el formulario
    const cantidad = parseFloat(req.body.cantidad);

    // Ejecutar la consulta
    db.query(
        'SELECT new_function(?, ?, ?)',
        [1, 'Retiro', cantidad],
        (error, results) => {
            if (error) {
                console.error('Error al realizar la transacción:', error);
                return;
            }
            console.log('La transacción se realizó con éxito');
            // Redirigir al usuario a la página principal
            res.redirect('/');
        }
    );
});

// Manejar la solicitud para transferir fondos
router.post('/transferir', (req, res) => {
    // Obtener la cantidad ingresada por el usuario desde el formulario
    const cantidad = parseFloat(req.body.cantidad);

    // Ejecutar la consulta
    db.query(
        'SELECT new_function(?, ?, ?)',
        [1, 'Transferencia', cantidad],
        (error, results) => {
            if (error) {
                console.error('Error al realizar la transacción:', error);
                return;
            }
            console.log('La transacción se realizó con éxito');
            // Redirigir al usuario a la página principal
            res.redirect('/');
        }
    );
});

module.exports = router;

