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

##
##     CRIAÇÂO DO DATABASE DO APLICATIVO DE PTCC
##
## COMANDO  DE CRIAÇÃO DO DATABASE

CREATE DATABASE bdtcc;
USE bdtcc;
## CRIAÇÃO DAS TABELAS
## 1
########## TABELA CLIENTE #####################
CREATE TABLE tbl_cliente(
		cod_cliente INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        cod_usuario INT(10) UNSIGNED NOT NULL,
		cod_endereco INT(10) UNSIGNED NOT NULL,
        nome_cliente VARCHAR(100) NOT NULL,
        telefone VARCHAR(20) NOT NULL,
        dt_nascimento TIMESTAMP(6) NOT NULL,
        sexo ENUM ('Feminino', 'Masculino') NOT NULL,
        descricao VARCHAR (255)
);
## 2
##########  TABELA ENDEREÇO  #####################
CREATE TABLE tbl_endereco(
		cod_endereco INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        logradouro VARCHAR(45) NOT NULL,
        numero VARCHAR(20) NOT NULL,
		cidade VARCHAR(50) NOT NULL,
        uf VARCHAR(2) NOT NULL,
        cep VARCHAR(45) NOT NULL,
        latitude VARCHAR(45),
        longitude VARCHAR(45),
        complemento VARCHAR (100)
);
## 3
##########  TABELA FORNECEDOR #####################
CREATE TABLE tbl_fornecedor(
		cod_fornecedor INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        cod_usuario INT(10) UNSIGNED NOT NULL,
		cod_endereco INT(10) UNSIGNED NOT NULL,
        razao_social VARCHAR(100) NOT NULL,
        telefone VARCHAR(20) NOT NULL,
        CNPJ_CPF VARCHAR(45) NOT NULL,
        tipo_estabelecimento ENUM('PESSOA FISICA','PESSOA JURIDICA') NOT NULL,
        horario_funcionamento TIMESTAMP(6) NOT NULL,
        status_estabelecimento ENUM ('ABERTO', 'FECHADO') NOT NULL,
        nome_fantasia VARCHAR (100),
        fotos_lugar Varchar(255),
        descricao TEXT
);
## 4
##########  TABELA RELACIONAMENTO FORNECEDOR E CATEGORIA #####################

CREATE TABLE tbl_fornecedor_has_tbl_categoria(
		cod_fornecedor INT(10) UNSIGNED NOT NULL,
        cod_categoria INT(10) UNSIGNED NOT NULL
);
## 5
##########  TABELA CATEGORIA #####################
CREATE TABLE tbl_categoria(
		cod_categoria INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        nome_categoria VARCHAR(45) NOT NULL,
        foto VARCHAR(255) NOT NULL,
        descricao VARCHAR (45)
);
## 6
##########  TABELA USUARIO #####################
CREATE TABLE tbl_usuario(
		cod_usuario INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        nome_usuario VARCHAR(45) NOT NULL,
        senha VARCHAR(20) NOT NULL,
        email VARCHAR(45) NOT NULL,
        email_recuperacao VARCHAR(45) NOT NULL,
        tipo_de_conta ENUM('CLIENTE', 'FORNECEDOR') NOT NULL,
        foto_usuario VARCHAR (255),
        backgroud_perfil VARCHAR(45),
        descricao VARCHAR(255)
);
## 7
##########  TABELA FORMA DE PAGAMENTO #####################
CREATE TABLE tbl_forma_pagamento(
		cod_pagamento INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        tipo_de_pagamento ENUM ('DINHEIRO', 'DÉBITO', 'CARTÃO DE CREDITO'),
        descricao VARCHAR(100),
        CPF VARCHAR(15)
);
## 8
##########  TABELA PEDIDOS #####################
CREATE TABLE tbl_pedido(
		cod_pedido INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        cod_servicos INT(10) UNSIGNED NOT NULL,
        cod_usuario INT(10) UNSIGNED NOT NULL,
        cod_agenda INT(10)  UNSIGNED NOT NULL,
        cod_pagamento INT(10)  UNSIGNED NOT NULL,
        data_pedido TIMESTAMP(6) NOT NULL,
        status_pedido ENUM ('EM ABERTO', 'EM ANDAMENTO','CANCELADO', 'FINALIZADO', 'AGENDADO') NOT NULL,
        descricao VARCHAR(100)
);
## 9
##########  TABELA SERVIÇOS #####################
CREATE TABLE tbl_servicos(
		cod_servicos INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        cod_fornecedor INT(10) UNSIGNED,
        cod_categoria INT(10) UNSIGNED NOT NULL,
        nome_servico VARCHAR(45) NOT NULL,
        valor DOUBLE NOT NULL,
        qtde_avaliacoes INT,
        descricao VARCHAR(255),
        duracao TIME(4),
        foto VARCHAR(45)

);
##10
##########  TABELA CLASSIFICAÇÃO #####################
CREATE TABLE tbl_classificacao(
		cod_classificacao INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        cod_servicos INT(10) UNSIGNED NOT NULL,
        nota ENUM('1','2', '3','4','5') NOT NULL,
        descricao VARCHAR (255)
);
##11
##########  TABELA AGENDA #####################
CREATE TABLE tbl_agenda(
		cod_agenda INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        data_agenda TIMESTAMP(6) NOT NULL,
        descricao VARCHAR (255)
);

## CRIAÇÃO DAS FK
## 1
########## FK TABELA CLIENTE #####################
## FK USUARIO
ALTER TABLE tbl_cliente
ADD CONSTRAINT FK_USUARIO_CLIENTE
FOREIGN KEY(cod_usuario)
REFERENCES tbl_usuario (cod_usuario);
## FK ENDEREÇO
ALTER TABLE tbl_cliente
ADD CONSTRAINT FK_ENDERECO_CLIENTE
FOREIGN KEY(cod_endereco)
REFERENCES tbl_endereco (cod_endereco);

## 2
########## FK TABELA FORNECEDOR #####################
## FK USUARIO
ALTER TABLE tbl_fornecedor
ADD CONSTRAINT FK_USUARIO_FORNECEDOR
FOREIGN KEY(cod_usuario)
REFERENCES tbl_usuario (cod_usuario);
## FK ENDEREÇO
ALTER TABLE tbl_fornecedor
ADD CONSTRAINT FK_ENDERECO_FORNECEDOR
FOREIGN KEY(cod_endereco)
REFERENCES tbl_endereco (cod_endereco);

## 3
########## FK TABELA RELACIONADORA FORNECEDOR E CATEGORIA #####################
## FK FORNECEDOR
ALTER TABLE tbl_fornecedor_has_tbl_categoria
ADD CONSTRAINT FK_FORNCEDOR_RELACIONADORA
FOREIGN KEY(cod_fornecedor)
REFERENCES tbl_fornecedor (cod_fornecedor);
## FK CATEGORIA
ALTER TABLE tbl_fornecedor_has_tbl_categoria
ADD CONSTRAINT FK_CATEGORIA_RELACIONADORA
FOREIGN KEY(cod_categoria)
REFERENCES tbl_categoria (cod_categoria);

## 4
########## FK TABELA PEDIDOS #####################
## FK SERVIÇOS
ALTER TABLE tbl_pedido
ADD CONSTRAINT FK_SERVICOS_PEDIDO
FOREIGN KEY(cod_servicos)
REFERENCES tbl_servicos (cod_servicos);
## FK USUÁRIO
ALTER TABLE tbl_pedido
ADD CONSTRAINT FK_USUARIO_PEDIDO
FOREIGN KEY(cod_usuario)
REFERENCES tbl_usuario (cod_usuario);
## FK AGENDA
ALTER TABLE tbl_pedido
ADD CONSTRAINT FK_AGENDA_PEDIDO
FOREIGN KEY(cod_agenda)
REFERENCES tbl_agenda (cod_agenda);
## FK PAGAMENTO
ALTER TABLE tbl_pedido
ADD CONSTRAINT FK_PAGAMENTO_PEDIDO
FOREIGN KEY(cod_pagamento)
REFERENCES tbl_forma_pagamento (cod_pagamento);

## 5
########## FK TABELA SERVICOS #####################
## FK SERVIÇOS
ALTER TABLE tbl_servicos
ADD CONSTRAINT FK_CATEGORIA_SERVICOS
FOREIGN KEY(cod_categoria)
REFERENCES tbl_categoria (cod_categoria);
## FK FORNECEDOR
ALTER TABLE tbl_servicos
ADD CONSTRAINT FK_FORNECEDOR_SERVICOS
FOREIGN KEY(cod_fornecedor)
REFERENCES tbl_fornecedor (cod_fornecedor);


## 6
########## FK TABELA CLASSIFICAÇÃO #####################
## FK CLASSIFICAÇÃO
ALTER TABLE tbl_classificacao
ADD CONSTRAINT FK_SERVICOS_CLASSIFICACAO
FOREIGN KEY(cod_servicos)
REFERENCES tbl_servicos (cod_servicos);






