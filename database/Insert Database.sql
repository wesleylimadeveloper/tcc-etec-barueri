## INSERT DADOS TABELA ENDEREÇOS

INSERT INTO tbl_endereco (cep, logradouro, numero, bairro, cidade, uf)
VALUES ('76558-177', 'Rua Noruega', '793', 'Valhalla', 'Valhalla', 'NR'),
('14528-185', 'Mansão X', '1994', 'Marvel', 'Marvel', 'MV'),
('45444-787', 'Rua dos Alfeneiros', '1991', 'Hogwarts', 'Hogwarts', 'HW'),
('12222-141', 'Evergreen Terrace', '632', 'Springfield', 'Springfield', 'SG'),
('12256-858', 'Avenida Walt Disney', '101', 'Florida', 'Florida', 'FD'),
('74777-787', 'Rua Century Fox', '20', 'Hollywood', 'Hollywood', 'HW');

## INSERT DADOS TABELA ESTABELECIMENTO

INSERT INTO tbl_estabelecimento (id_endereco, nome_fantasia, telefone_estabelecimento, foto_estabelecimento, status_estabelecimento) 
VALUES  (1, 'Barbearia dos Vikings', '95858-1565', 'https://www.guiadasemana.com.br/contentFiles/image/2017/02/FEA/principal/49393_w840h0_1486764558shutterstock-barbearia.jpg', 'ABERTO'), 
(2, 'Salão da Mary Jane', '96320-8748', 'https://i.pinimg.com/originals/06/2c/86/062c867fb4139a2a7bbc9876bb75ed0a.jpg', 'ABERTO'), 
(3, 'HP Hairstyle', '99941-2000', 'https://t2.tudocdn.net/576478?w=1200', 'ABERTO'), 
(4, 'Marge Simpson Spa', '98787-2562', 'https://tec-cia.com.br/wp-content/uploads/2014/07/Marge_Simpson_by_leif_j.jpg', 'ABERTO'), 
(5, 'Cruella De Vil Pet Shop', '95947-1815', 'https://thaisfarage.com.br/wp-content/uploads/2021/08/1623486101492154-20210531-Cruella-de-Vil-Preview-Image-2.jpg', 'ABERTO'),
(6, 'Edward Mãos de Tesoura Cabeleireiro', '95200-1011', 'https://livrosfilmesdehorrorhome.files.wordpress.com/2021/02/edward-final-blog-post.jpg', 'ABERTO');

INSERT INTO tbl_categoria (nome_categoria, foto_categoria) 
VALUES ('Barba', 'https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
('Cortes', 'https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
('Depilação', 'https://cdn.pixabay.com/photo/2020/10/20/13/08/hair-removal-5670408_960_720.jpg'),
('Escova', 'https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
('Estética Corporal', 'https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
('Estética Facial', 'https://images.pexels.com/photos/5927811/pexels-photo-5927811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
('Manicure e Pedicure', 'https://images.pexels.com/photos/361754/pexels-photo-361754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
('Maquiagem', 'https://images.pexels.com/photos/2661256/pexels-photo-2661256.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
('Química em Geral', 'https://images.pexels.com/photos/7428100/pexels-photo-7428100.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
('Serviços Especiais', 'https://image.flaticon.com/icons/png/512/41/41994.png'),
('Sobrancelhas', 'https://images.pexels.com/photos/5177990/pexels-photo-5177990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
('Tatuagem', 'https://images.pexels.com/photos/4125659/pexels-photo-4125659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
('Tratamento Capilar', 'https://images.pexels.com/photos/3993454/pexels-photo-3993454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');

## INSERT DADOS TABELA SERVIÇO

INSERT INTO tbl_servico (id_estabelecimento, id_categoria, nome_servico, valor_servico)
VALUES (1, 1, 'Barba', 14.99),
(1, 2, 'Corte Adulto', 14.99),
(1, 2, 'Corte Infantil', 9.99),
(1, 2, 'Corte e Barba', 24.99),
(1, 2, 'Relaxamento', 29.99),
(1, 2, 'Escova Progressiva', 79.99),
(2, 2, 'Corte Adulto', 9.99),
(2, 2, 'Corte Infantil', 4.99),
(2, 2, 'Corte e Barba', 19.99),
(2, 9, 'Relaxamento', 39.99),
(2, 4, 'Escova Progressiva', 99.99),
(3, 1, 'Barba', 14.99),
(3, 2, 'Corte Adulto e Infantil', 14.99),
(3, 9, 'Relaxamento', 29.99),
(4, 5, 'Massoterapia', 199.99),
(4, 5, 'Tratamentos Corporais', 149.99),
(4, 6, 'Tratamentos Faciais', 99.99),
(4, 6, 'Estética Facial', 119.99),
(4, 10, 'Alimentação no SPA', 79.99),
(4, 10, 'Atividades Físicas', 49.99),
(5, 10, 'Hidratação Simples', 9.99),
(5, 10, 'Tosa Higiênica', 59.99),
(5, 10, 'Banhos', 49.99),
(5, 10, 'Banho Para Gatos', 89.99),
(6, 1, 'Barba', 9.99),
(6, 2, 'Corte Adulto', 9.99),
(6, 2, 'Corte Infantil', 4.99),
(6, 2, 'Corte e Barba', 14.99);
