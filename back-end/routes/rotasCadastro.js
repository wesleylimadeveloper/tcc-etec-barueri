const express = require('express')
const connection = require('../util/database')
const router = express.Router()

router.post('/clientes', (req, res) => {
    const { nome, telefone, data_nascimento, sexo, descricao } = req.body
    const sql = `INSERT INTO tbl_cliente(nome_cliente, telefone, dt_nascimento, sexo, descricao) VALUES(?, ?, ?, ?, ?)`
    
    connection.query(sql, [nome, telefone, data_nascimento, sexo, descricao], (error, rows, fields) => {
        if (!error) {
            res.send('Dados cadastrados com sucesso!')
        } else {
            res.send('Erro ao cadastrar os dados.')
        }
    })
})

router.post('/enderecos', (req, res) => {
    const { logradouro, numero, cidade, uf, cep, latitude, longitude, complemento } = req.body
    const sql = `INSERT INTO tbl_endereco(logradouro, numero, cidade, uf, cep, latitude, longitude, complemento) VALUES(?, ?, ?, ?, ?, ?, ?, ?)`
    
    connection.query(sql, [logradouro, numero, cidade, uf, cep, latitude, longitude, complemento], (error, rows, fields) => {
        if (!error) {
            res.send('Dados cadastrados com sucesso!')
        } else {
            res.send('Erro ao cadastrar os dados.')
        }
    })
})

router.post('/fornecedores', (req, res) => {
    const { razao_social, telefone, cnpj_cpf, tipo_estabelecimento, horario_funcionamento, status_estabelecimento, nome_fantasia, fotos_lugar, descricao } = req.body
    const sql = `INSERT INTO tbl_fornecedor(razao_social, telefone, CNPJ_CPF, tipo_estabelecimento, horario_funcionamento, status_estabelecimento, nome_fantasia, fotos_lugar, descricao) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`
    
    connection.query(sql, [razao_social, telefone, cnpj_cpf, tipo_estabelecimento, horario_funcionamento, status_estabelecimento, nome_fantasia, fotos_lugar, descricao], (error, rows, fields) => {
        if (!error) {
            res.send('Dados cadastrados com sucesso!')
        } else {
            res.send('Erro ao cadastrar os dados.')
        }
    })
})

router.post('/categorias', (req, res) => {
    const { nome, foto, descricao } = req.body
    const sql = `INSERT INTO tbl_categoria(nome_categoria, foto, descricao) VALUES(?, ?, ?)`
    
    connection.query(sql, [nome, foto, descricao], (error, rows, fields) => {
        if (!error) {
            res.send('Dados cadastrados com sucesso!')
        } else {
            res.send('Erro ao cadastrar os dados.')
        }
    })
})

router.post('/usuarios', (req, res) => {
    const { nome, senha, email, email_recuperacao, tipo_conta, foto_usuario, background_perfil, descricao } = req.body
    const sql = `INSERT INTO tbl_usuario(nome_usuario, senha, email, email_recuperacao, tipo_de_conta, foto_usuario, backgroud_perfil, descricao) VALUES(?, ?, ?, ?, ?, ?, ?, ?)`
    
    connection.query(sql, [nome, senha, email, email_recuperacao, tipo_conta, foto_usuario, background_perfil, descricao], (error, rows, fields) => {
        if (!error) {
            res.send('Dados cadastrados com sucesso!')
        } else {
            res.send('Erro ao cadastrar os dados.')
        }
    })
})

router.post('/formaspagamento', (req, res) => {
    const { tipo_pagamento, descricao, cpf } = req.body
    const sql = `INSERT INTO tbl_forma_pagamento(tipo_de_pagamento, descricao, CPF) VALUES(?, ?, ?)`
    
    connection.query(sql, [tipo_pagamento, descricao, cpf], (error, rows, fields) => {
        if (!error) {
            res.send('Dados cadastrados com sucesso!')
        } else {
            res.send('Erro ao cadastrar os dados.')
        }
    })
})

router.post('/pedidos', (req, res) => {
    const { data_pedido, status_pedido, descricao } = req.body
    const sql = `INSERT INTO tbl_pedido(data_pedido, status_pedido, descricao) VALUES(?, ?, ?)`
    
    connection.query(sql, [data_pedido, status_pedido, descricao], (error, rows, fields) => {
        if (!error) {
            res.send('Dados cadastrados com sucesso!')
        } else {
            res.send('Erro ao cadastrar os dados.')
        }
    })
})

router.post('/servicos', (req, res) => {
    const { nome, valor, qtde_avaliacoes, descricao, duracao, foto } = req.body
    const sql = `INSERT INTO tbl_servicos(nome_servico, valor, qtde_avaliacoes, descricao, duracao, foto) VALUES(?, ?, ?, ?, ?, ?)`
    
    connection.query(sql, [nome, valor, qtde_avaliacoes, descricao, duracao, foto], (error, rows, fields) => {
        if (!error) {
            res.send('Dados cadastrados com sucesso!')
        } else {
            res.send('Erro ao cadastrar os dados.')
        }
    })
})

router.post('/classificacoes', (req, res) => {
    const { nota, descricao } = req.body
    const sql = `INSERT INTO tbl_classificacao(nota, descricao) VALUES(?, ?)`
    
    connection.query(sql, [nota, descricao], (error, rows, fields) => {
        if (!error) {
            res.send('Dados cadastrados com sucesso!')
        } else {
            res.send('Erro ao cadastrar os dados.')
        }
    })
})

router.post('/agendas', (req, res) => {
    const { data_agenda, descricao } = req.body
    const sql = `INSERT INTO tbl_agenda(data_agenda, descricao) VALUES(?, ?)`
    
    connection.query(sql, [data_agenda, descricao], (error, rows, fields) => {
        if (!error) {
            res.send('Dados cadastrados com sucesso!')
        } else {
            res.send('Erro ao cadastrar os dados.')
        }
    })
})

module.exports = router