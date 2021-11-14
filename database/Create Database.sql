## CRIAÇÃO DO DATABASE DO APLICATIVO DE TCC

CREATE DATABASE bdtcc;

USE bdtcc;

## CRIAÇÃO DAS TABELAS

## 1
## TABELA CLIENTE
CREATE TABLE tbl_cliente(
        id_cliente INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        nome_cliente VARCHAR(255) NOT NULL,
        sobrenome_cliente VARCHAR(255) NOT NULL,
        email_cliente VARCHAR(255) NOT NULL,
        senha_cliente VARCHAR(255) NOT NULL,
        telefone_cliente VARCHAR(255) NOT NULL,
        foto_cliente VARCHAR(255),
        sexo_cliente ENUM ('MASCULINO', 'FEMININO', 'OUTRO') NOT NULL
);

## 2
## TABELA ENDEREÇO
CREATE TABLE tbl_endereco(
		id_endereco INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        cep VARCHAR(255) NOT NULL,
        logradouro VARCHAR(255) NOT NULL,
        numero VARCHAR(255) NOT NULL,
        complemento VARCHAR(255),
        bairro VARCHAR(255) NOT NULL,
		cidade VARCHAR(255) NOT NULL,
        uf VARCHAR(2) NOT NULL,
        latitude VARCHAR(255),
        longitude VARCHAR(255)
);

## 3
## TABELA ESTABELECIMENTO
CREATE TABLE tbl_estabelecimento(
		id_estabelecimento INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
		id_endereco INT(10) UNSIGNED NOT NULL,
        nome_fantasia VARCHAR (100) NOT NULL,
        telefone_estabelecimento VARCHAR(20) NOT NULL,
        foto_estabelecimento VARCHAR(255),
        status_estabelecimento ENUM ('ABERTO', 'ALMOÇO', 'JANTA', 'FECHADO') NOT NULL
);

## 4
## TABELA CATEGORIA
CREATE TABLE tbl_categoria(
		id_categoria INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        nome_categoria VARCHAR(255) NOT NULL,
        foto_categoria VARCHAR(255)
);

## 5
## TABELA SERVIÇO
CREATE TABLE tbl_servico(
		id_servico INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        id_estabelecimento INT(10) UNSIGNED NOT NULL,
        id_categoria INT(10) UNSIGNED NOT NULL,
        nome_servico VARCHAR(255) NOT NULL,
        valor_servico DOUBLE NOT NULL
);

## 6
## TABELA RELACIONAMENTO ESTABELECIMENTO E CATEGORIA
CREATE TABLE tbl_estabelecimento_categoria(
		id_estabelecimento INT(10) UNSIGNED NOT NULL,
        id_categoria INT(10) UNSIGNED NOT NULL
);

## 7
## TABELA AGENDA
CREATE TABLE tbl_agenda(
		id_agenda INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        id_estabelecimento INT(10) UNSIGNED NOT NULL,
        id_cliente INT(10) UNSIGNED NOT NULL,
        id_servico INT(10) UNSIGNED NOT NULL,
        data_agenda TIMESTAMP(6) NOT NULL,
        status_agenda ENUM ('AGENDADO', 'CANCELADO', 'FINALIZADO') NOT NULL
);

## CRIAÇÃO DAS FK

## 1
## FK TABELA ESTABELECIMENTO

## FK ENDEREÇO
ALTER TABLE tbl_estabelecimento
ADD CONSTRAINT FK_ENDERECO_ESTABELECIMENTO
FOREIGN KEY(id_endereco)
REFERENCES tbl_endereco (id_endereco);

## 2
## FK TABELA RELACIONADORA ESTABELECIMENTO E CATEGORIA

## FK FORNECEDOR
ALTER TABLE tbl_estabelecimento_categoria
ADD CONSTRAINT FK_ESTABELECIMENTO_RELACIONADORA
FOREIGN KEY(id_estabelecimento)
REFERENCES tbl_estabelecimento (id_estabelecimento);

## FK CATEGORIA
ALTER TABLE tbl_estabelecimento_categoria
ADD CONSTRAINT FK_CATEGORIA_RELACIONADORA
FOREIGN KEY(id_categoria)
REFERENCES tbl_categoria (id_categoria);

## 3
## FK TABELA AGENDA

## FK ESTABELECIMENTO
ALTER TABLE tbl_agenda
ADD CONSTRAINT FK_AGENDA_ESTABELECIMENTO
FOREIGN KEY(id_estabelecimento)
REFERENCES tbl_estabelecimento (id_estabelecimento);

## FK CLIENTE
ALTER TABLE tbl_agenda
ADD CONSTRAINT FK_AGENDA_CLIENTE
FOREIGN KEY(id_cliente)
REFERENCES tbl_cliente (id_cliente);

## FK SERVICO
ALTER TABLE tbl_agenda
ADD CONSTRAINT FK_AGENDA_SERVICO
FOREIGN KEY(id_servico)
REFERENCES tbl_servico (id_servico);