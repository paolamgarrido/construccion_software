const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(username, nombre, contraseña) {
        this.username = username;
        this.nombre = nombre;
        this.contraseña = contraseña;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return bcrypt.hash(this.contraseña, 12) // el "costo" del algoritmo de hashing, 12 es un valor comúnmente recomendado en la documentación de bcryptjs
            .then((contraseña_cifrada) => {
                return db.execute(
                    `INSERT INTO usuario (username, nombre, contraseña) 
                    VALUES (?, ?, ?)`, 
                    [this.username, this.nombre, contraseña_cifrada]);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    static fetchOne(username) {
        return db.execute('Select * from usuario WHERE username = ?', [username]);
    }
}