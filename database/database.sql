CREATE DATABASE inventarios_productos_db;
USE inventarios_productos_db;
/* La tabla debe cambiar al que le toco esta parte a su conveniencia*/

CREATE TABLE productos (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(255) NOT NULL,
  descripcion varchar(255) NOT NULL,
  precio decimal(10,2) NOT NULL,
  cantidad int(11) NOT NULL,
  fecha_creacion datetime NOT NULL,
  fecha_actualizacion datetime NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- tabla de datos de materia prima
CREATE TABLE materia_prima (
  id int NOT NULL AUTO_INCREMENT,
  codigo varchar(255) NOT NULL,
  nombre varchar(255) NOT NULL,
  precio varchar(255) NOT NULL,
  unidad_medida varchar(255) NOT NULL,
  cantidad varchar(255) NOT NULL,
  fecha_ingreso varchar(255) NOT NULL,
  fecha_caducidad varchar(255) NOT NULL,
  imagen longtext NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3

-- base de datos de proveedores
CREATE TABLE proveedores (
  id INT(11) NOT NULL AUTO_INCREMENT,
  NombreApellido VARCHAR(255) NOT NULL,
  Cedula INT(10) NOT NULL,
  NumeroCelular VARCHAR(10) NOT NULL,
  CorreoElectronico VARCHAR(50) NOT NULL,
  Direccion VARCHAR(255) NOT NULL,
  NombreEmpresa VARCHAR(255) NOT NULL,
  TelefonoEmpresa INT(10) NOT NULL,
  DireccionEmpresa varchar(50) NOT NULL,
  CorreoEmpresa varchar(50) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb3

-- base de datos de proveedores

CREATE TABLE inventarios_productos_db.producto_terminado (
  id_terminado INT NOT NULL AUTO_INCREMENT,
  costo_terminado FLOAT NOT NULL,
  cantidad_terminado INT NOT NULL,
  receta VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_terminado)
  )ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb3
