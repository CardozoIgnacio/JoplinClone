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
    usuario_id INTEGER NOT NULL, 
    CONSTRAINT booknotes_fk  FOREIGN KEY (usuario_id) REFERENCES Usuarios(id) ON DELETE CASCADE
);

-- Creacion de notas--
CREATE TABLE Notes(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    body TEXT NOT NULL,
    booknote_id INTEGER NOT NULL,
    CONSTRAINT notes_fk FOREIGN KEY (booknote_id) REFERENCES Booknotes(id) ON DELETE CASCADE
);
