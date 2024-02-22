CREATE DATABASE IF NOT EXISTS banco_orca3d;

USE banco_orca3d;

CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    tipo_usuario ENUM('professor','aluno', 'outro') DEFAULT 'outro'
);

CREATE TABLE pecas (
    id_peca INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    peso FLOAT NOT NULL
);

CREATE TABLE dados_calculadora (
    id_dados INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_peca INT,
    peso_peca FLOAT NOT NULL,
    peso_filamento FLOAT NOT NULL,
    valor_total_filamento FLOAT,
    potencia_equipamento FLOAT,
    horas_impressao FLOAT,
    consumo_energia FLOAT,
    valor_kwh FLOAT,
    valor_hora FLOAT,
    hora_preparacao FLOAT,
    hora_fatiador FLOAT,
    valor_trabalho FLOAT,
    fluxo_caixa FLOAT,
    investimento FLOAT,
    periodo FLOAT,
    porcentagem_cola FLOAT,
    margem_cola FLOAT,
    porcentagem_lucro FLOAT,
    margem_lucro FLOAT,
    total_com_lucro FLOAT,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
    FOREIGN KEY (id_peca) REFERENCES pecas(id_peca)
);

CREATE TABLE historico_alteracoes (
    id_alteracao INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_dados INT,
    data_alteracao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
    FOREIGN KEY (id_dados) REFERENCES dados_calculadora(id_dados)
);
