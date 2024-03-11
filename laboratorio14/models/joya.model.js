const joyas = [
    {
        marca: "Tiffany & Co",
        nombre: "Anillo Sixteen Stone",
        tipo: "Anillo", 
        material: "Oro", 
        piedra: "Diamante",
        peso: "1.14 quilates",
        numero_producto: "60099365",
        imagen: "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-co-schlumberger-anillo-sixteen-stone-11715966_1031820_ED.jpg?&op_usm=1.75,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&&fmt=webp", 
    }
];

module.exports = class Joya {

    constructor(mi_marca, mi_nombre, mi_tipo, mi_material, mi_piedra, mi_peso,mi_numero_producto, mi_imagen) {
        this.marca = mi_marca;
        this.nombre = mi_nombre;
        this.tipo = mi_tipo;
        this.material = mi_material;
        this.piedra = mi_piedra;
        this.peso = mi_peso;
        this.numero_producto = mi_numero_producto;
        this.imagen = mi_imagen;
    }

    save() {
        joyas.push({
            marca: this.marca,
            nombre: this.nombre,
            tipo: this.tipo, 
            material: this.material,
            piedra: this.piedra, 
            peso: this.peso,
            numero_producto: this.numero_producto,
            imagen: this.imagen,
        });
    }

    static fetchAll() {
        return joyas;
    }

}
