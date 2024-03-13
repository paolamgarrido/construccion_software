const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    database: 'tienda_joyas',
    password: '.Pm2paola'
});

module.exports = pool.promise();