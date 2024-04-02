const db = require('../util/database');

module.exports = class Joya {

    constructor(mi_marca, mi_nombre, mi_tipo, mi_material, mi_piedra, mi_peso, mi_imagen) {
        this.marca = mi_marca;
        this.nombre = mi_nombre;
        this.tipo = mi_tipo;
        this.material = mi_material;
        this.piedra = mi_piedra;
        this.peso = mi_peso;
        this.imagen = mi_imagen;
    }

    save() {
        return db.execute(
            `CALL insert_joya(?, ?, ?, ?, ?, ?, ?)`, 
            [this.marca, this.nombre, this.tipo, this.material, this.piedra, this.peso, this.imagen]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    //SELECT * FROM tienda_joyas.joya; 
    static fetchAll() {
        return db.execute('Select * from joya')
    }

    static fetch(id_producto) {
        if (id_producto) {
            return this.fetchOne(id_producto);
        } else {
            return this.fetchAll();
        }
    }

    static fetchOne(id_producto) {
        return db.execute('Select * from joya WHERE id_producto = ?', [id_producto]);
    } 

}
