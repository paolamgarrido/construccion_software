USE tienda_joyas;

-- rolusuario
CREATE TABLE rol (
  id INT NOT NULL AUTO_INCREMENT,
  nombre varchar(40) NOT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (id)
);

-- privilegio
CREATE TABLE privilegio (
  id INT NOT NULL AUTO_INCREMENT, 
  permiso varchar(40) NOT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (id)
);

CREATE TABLE Joya (
	id_producto INT NOT NULL AUTO_INCREMENT, 
	marca VARCHAR(40),
    nombre VARCHAR(30),
    tipo VARCHAR(30),
    material VARCHAR(30),
    piedra VARCHAR(30),
    peso VARCHAR(20),
    imagen VARCHAR(300),
    created_at timestamp NOT NULL DEFAULT current_timestamp(),
    primary key (id_producto)
);

CREATE TABLE Usuario(
	id_usuario INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(45),
    nombre VARCHAR(30),
    contraseña VARCHAR(80),
    created_at timestamp NOT NULL DEFAULT current_timestamp(),
    primary key (id_usuario)
);

ALTER TABLE Usuario ADD INDEX username_index (username);
ALTER TABLE rol ADD INDEX id_index (id);

-- asigna
CREATE TABLE asigna (
  username varchar(45),
  idrol INT,
  created_at timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (username, idrol),
  CONSTRAINT asigna_ibfk_1 FOREIGN KEY (username) references usuario(username),
  CONSTRAINT asigna_ibfk_2 FOREIGN KEY (idrol) references rol(id)
);

-- posee
CREATE TABLE posee (
  idpermiso INT NOT NULL AUTO_INCREMENT,
  idrol INT NOT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (idrol,idpermiso),
  CONSTRAINT posee_ibfk_1 FOREIGN KEY (idrol) references rol(id),
  CONSTRAINT posee_ibfk_2 FOREIGN KEY (idpermiso) references privilegio(id)
);

-- tiene
CREATE TABLE tiene(
  id INT NOT NULL,
  username varchar(20) NOT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (id,username,created_at),
  FOREIGN KEY (id) references joya(id_producto),
  FOREIGN KEY (username) references usuario(username)
);

INSERT INTO Joya(marca,nombre,tipo,material,piedra,peso,imagen)VALUES
("Tiffany & Co.", "Anillo Sixteen Stone","Anillo", "Oro", "Diamantes", "1.14 quilates", "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-co-schlumberger-anillo-sixteen-stone-11715966_1031820_ED.jpg?&op_usm=1.75,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp");

INSERT INTO privilegio (id, permiso) VALUES
("1", "crear_joyas"),
("2", "ver_joyas"),
("3", "editar_joya");

INSERT INTO asigna (username, idrol) VALUES
("empleadajoyas", "2");

INSERT INTO rol (id, nombre) VALUES
("2", "empleada");

INSERT INTO posee (idrol, idpermiso) VALUES
("2", "2");
