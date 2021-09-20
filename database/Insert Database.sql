INSERT DADOS TABELA CATEGORIA

INSERT INTO tbl_categoria (nome_categoria, foto, descricao) 
VALUES ('Barba',   'https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', ''),
('Cortes',  'https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', ''),
('Depilação', 'https://cdn.pixabay.com/photo/2020/10/20/13/08/hair-removal-5670408_960_720.jpg', ''),
('Escova',  'https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', ''),
('Estética Corporal',  'https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', ''),
('Estética Facial',  'https://images.pexels.com/photos/5927811/pexels-photo-5927811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', ''),
('Manicure e Pedicure',  'https://images.pexels.com/photos/361754/pexels-photo-361754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', ''),
('Maquiagem',  'https://images.pexels.com/photos/2661256/pexels-photo-2661256.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', ''),
('Química em Geral',  'https://images.pexels.com/photos/7428100/pexels-photo-7428100.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', ''),
('Serviços Especiais', 'https://image.flaticon.com/icons/png/512/41/41994.png', ''),
('Sobrancelhas',  'https://images.pexels.com/photos/5177990/pexels-photo-5177990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', ''),
('Tatuagem',  'https://images.pexels.com/photos/4125659/pexels-photo-4125659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', ''),
('Tratamento Capilar',  'https://images.pexels.com/photos/3993454/pexels-photo-3993454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', '');

=============================================================================================================================================================================
INSERT DADOS TABELA USUARIO

INSERT INTO tbl_usuario (nome_usuario, senha, email, email_recuperacao, tipo_de_conta) 
VALUES ('vikingsbarber', 'valhalla', 'vikingsbarber@valhalla.com', 'vikingsbarber@barber.com', 'FORNECEDOR'),
('maryjanesaloon', 'spiderman', 'maryjanesaloon@xmansion.com', 'maryjanesaloon@spiderman.com', 'FORNECEDOR'),
('hphairstyle', 'gryffindor', 'hphairstyle@gryffindor.com', 'hphairstyle@potter.com', 'FORNECEDOR'),
('margesimpsonspa', 'ihateyouhomer', 'margesimpsonspa@bluehair.com', 'margesimpsonspa@springfield.com', 'FORNECEDOR'),
('cruelladevil', 'ilovedogs', 'cruelladevil@101dalmatas.com', 'cruelladevil@disney.com', 'FORNECEDOR'),
('edwardscissorhands', 'icutyou', 'edwardscissorhands@cut.com', 'edwardscissorhands@century.com', 'FORNECEDOR');

INSERT INTO tbl_usuario (nome_usuario, senha, email, email_recuperacao, tipo_de_conta, foto_usuario)
VALUES ('wes_guedes', '1234', 'wesleyguedes7@gmail.com', 'wesleyguedes11@hotmail.com', 'CLIENTE', 'https://avatars.githubusercontent.com/u/66446407?v=4');

=============================================================================================================================================================================
INSERT DADOS TABELA ENDEREÇOS

INSERT INTO tbl_endereco (logradouro, numero, cidade, uf, cep)
VALUES ('Rua Noruega', '793', 'Valhalla', 'NR', '76558-177'),
('Mansão X', '1994', 'Marvel', 'MV', '14528-185'),
('Rua dos Alfeneiros', '1991', 'Hogwarts', 'HW', '45444-787'),
('Evergreen Terrace', '632', 'Springfield', 'SG', '12222-141'),
('Avenida Walt Disney', '101', 'Florida', 'FD', '12256-858'),
('Rua Century Fox', '20', 'Hollywood', 'HW', '74777-787');
=============================================================================================================================================================================

INSERT DADOS TABELA FORNECEDOR

INSERT INTO tbl_fornecedor (cod_usuario, cod_endereco, razao_social, telefone, CNPJ_CPF, tipo_estabelecimento, horario_funcionamento, status_estabelecimento, nome_fantasia, fotos_lugar) 
VALUES  (1, 1, 'Barbearia dos Vikings LTDA', '00000-0000', '000.000.000-00', 'PESSOA JURIDICA', 000000, 'ABERTO', 'Barbearia dos Vikings', 'https://www.guiadasemana.com.br/contentFiles/image/2017/02/FEA/principal/49393_w840h0_1486764558shutterstock-barbearia.jpg'), 
(2, 2, 'Salão da Mary Jane LTDA', '00000-0000', '000.000.000-00', 'PESSOA FISICA', 000000, 'ABERTO', 'Salão da Mary Jane', 'https://i.pinimg.com/originals/06/2c/86/062c867fb4139a2a7bbc9876bb75ed0a.jpg'), 
(3, 3, 'HP Hairstyle LTDA', '00000-0000', '000.000.000-00', 'PESSOA JURIDICA', 000000, 'ABERTO', 'HP Hairstyle', 'https://t2.tudocdn.net/576478?w=1200'), 
(4, 4, 'Marge Simpson Spa LTDA', '00000-0000', '000.000.000-00', 'PESSOA FISICA', 000000, 'ABERTO', 'Marge Simpson Spa', 'https://tec-cia.com.br/wp-content/uploads/2014/07/Marge_Simpson_by_leif_j.jpg'), 
(5, 5, 'Cruella De Vil Pet Shop LTDA', '00000-0000', '000.000.000-00', 'PESSOA JURIDICA', 000000, 'ABERTO', 'Cruella De Vil Pet Shop', 'https://thaisfarage.com.br/wp-content/uploads/2021/08/1623486101492154-20210531-Cruella-de-Vil-Preview-Image-2.jpg'),
(6, 6, 'Edward Scissorhands LTDA', '00000-0000', '000.000.000-00', 'PESSOA JURIDICA', 000000, 'ABERTO', 'Edward Mãos de Tesoura Cabeleireiro', 'https://livrosfilmesdehorrorhome.files.wordpress.com/2021/02/edward-final-blog-post.jpg');

=============================================================================================================================================================================
INSERT DADOS TABELA SERVIÇOS 

INSERT INTO tbl_servicos (cod_categoria, nome_servico, valor, cod_fornecedor)
VALUES (1, 'Barba', 14.99, 1),
(2, 'Corte Adulto', 14.99, 1),
(2, 'Corte Infantil', 9.99, 1),
(2, 'Corte e Barba', 24.99, 1),
(2, 'Relaxamento', 29.99, 1),
(2, 'Escova Progressiva', 79.99, 1),
(2, 'Corte Adulto', 9.99, 2),
(2, 'Corte Infantil', 4.99, 2),
(2, 'Corte e Barba', 19.99, 2),
(9, 'Relaxamento', 39.99, 2),
(4, 'Escova Progressiva', 99.99, 2),
(1, 'Barba', 14.99, 3),
(2, 'Corte Adulto e Infantil', 14.99, 3),
(9, 'Relaxamento', 29.99, 3),
(5, 'Massoterapia', 199.99, 4),
(5, 'Tratamentos Corporais', 149.99, 4),
(6, 'Tratamentos Faciais', 99.99, 4),
(6, 'Estética Facial', 119.99, 4),
(10, 'Alimentação no SPA', 79.99, 4),
(10, 'Atividades Físicas', 49.99, 4),
(10, 'Hidratação Simples', 9.99, 5),
(10, 'Tosa Higiênica', 59.99, 5),
(10, 'Banhos', 49.99, 5),
(10, 'Banho Para Gatos', 89.99, 5),
(1, 'Barba', 9.99, 6),
(2, 'Corte Adulto', 9.99, 6),
(2, 'Corte Infantil', 4.99, 6),
(2, 'Corte e Barba', 14.99, 6);

=============================================================================================================================================================================
INSERT DADOS TABELA CLIENTE
INSERT INTO tbl_cliente (cod_usuario, cod_endereco, nome_cliente, telefone, dt_nascimento, sexo)
VALUES (7, 7, 'Wesley Lima', '(11) 95947-1815', '900504', 'Masculino');



