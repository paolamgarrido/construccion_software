CREATE DATABASE Tienda_Joyas;
USE Tienda_Joyas;

CREATE TABLE Joya (
	id_producto INT NOT NULL AUTO_INCREMENT, 
	marca VARCHAR(40),
    nombre VARCHAR(30),
    tipo VARCHAR(30),
    material VARCHAR(30),
    piedra VARCHAR(30),
    peso VARCHAR(20),
    imagen VARCHAR(300),
    primary key (id_producto)
);

CREATE TABLE Usuario(
	id_usuario INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(30),
    contraseña VARCHAR(80),
    primary key (id_usuario)
);

CREATE TABLE Consulta(
	id_producto INT, 
    id_usuario INT,
    fecha DATE,
    primary key (id_producto,id_usuario, fecha),
    foreign key (id_producto) references Joya(id_producto),
    foreign key (id_usuario) references Usuario(id_usuario)
);

INSERT INTO Joya(marca,nombre,tipo,material,piedra,peso,imagen)VALUES
("Tiffany & Co.", "Anillo Sixteen Stone","Anillo", "Oro", "Diamantes", "1.14 quilates", "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-co-schlumberger-anillo-sixteen-stone-11715966_1031820_ED.jpg?&op_usm=1.75,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp");