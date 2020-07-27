----------------------------------------
-- Creacion de tablas de base de datos--
----------------------------------------

-- Cracion de usuarios--
CREATE TABLE Usuarios(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,

    UNIQUE(nombre),
    UNIQUE(email)
);

-- Creacion de booknote--
CREATE TABLE Booknotes(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,

    idUser BIGSERIAL NOT NULL REFERENCES Usuarios(id)
);

-- Creacion de notas--
CREATE TABLE Notes(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    body TEXT NOT NULL,

    idNote BIGSERIAL NOT NULL REFERENCES Booknotes(id)
);
