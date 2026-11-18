CREATE DATABASE elos;

USE elos;

CREATE TABLE usuario(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(45) NOT NULL,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE grupo(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    descricao VARCHAR(200),
    fk_usuario INT, 
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE pessoa(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    vinculo VARCHAR(45) NOT NULL,
    descricao VARCHAR(200),
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    foto VARCHAR(150),
    fk_usuario INT NOT NULL,
    fk_grupo INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    FOREIGN KEY (fk_grupo) REFERENCES grupo(id)
);

CREATE TABLE avaliacao(
    id INT PRIMARY KEY AUTO_INCREMENT,
    convivencia INT NOT NULL,
    apoio INT NOT NULL,
    confianca INT NOT NULL,
    data_avaliacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    fk_pessoa INT NOT NULL,
    FOREIGN KEY (fk_pessoa) REFERENCES pessoa(id)
);

CREATE VIEW vw_elos AS 
SELECT
    pessoa.id,
    pessoa.nome,
    pessoa.vinculo,
    pessoa.fk_usuario,
    grupo.nome AS grupo,
    avaliacao.convivencia,
    avaliacao.confianca,
    avaliacao.apoio,
    ROUND((avaliacao.convivencia + avaliacao.confianca + avaliacao.apoio) / 3) AS forca
FROM pessoa
JOIN avaliacao
    ON avaliacao.fk_pessoa = pessoa.id
LEFT JOIN grupo
    ON grupo.id = pessoa.fk_grupo
WHERE avaliacao.id = (SELECT MAX(id) FROM avaliacao WHERE fk_pessoa = pessoa.id);