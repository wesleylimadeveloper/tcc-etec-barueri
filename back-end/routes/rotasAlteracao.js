const express = require('express')
const connection = require('../util/database')
const router = express.Router()

router.put('/clientes/:id', (req, res) => {
    const id = req.params
    const { nome, telefone, data_nascimento, sexo, descricao } = req.body
    const sql = `UPDATE tbl_cliente SET nome_cliente = ?, telefone = ?, dt_nascimento = ?, sexo = ?, descricao = ? WHERE cod_cliente = ${id}`
    
    connection.query(sql, [nome, telefone, data_nascimento, sexo, descricao], (error, rows, fields) => {
        if (!error) {
            res.send('Dados alterados com sucesso!')
        } else {
            res.send('Erro ao alterar os dados.')
        }
    })
})

router.put('/enderecos/:id', (req, res) => {
    const id = req.params
    const { logradouro, numero, cidade, uf, cep, latitude, longitude, complemento } = req.body
    const sql = `UPDATE tbl_endereco SET logradouro = ?, numero = ?, cidade = ?, uf = ?, cep = ?, latitude = ?, longitude = ?, complemento = ? WHERE cod_endereco = ${id}`
    
    connection.query(sql, [logradouro, numero, cidade, uf, cep, latitude, longitude, complemento], (error, rows, fields) => {
        if (!error) {
            res.send('Dados alterados com sucesso!')
        } else {
            res.send('Erro ao alterar os dados.')
        }
    })
})

router.put('/fornecedores/:id', (req, res) => {
    const id = req.params
    const { razao_social, telefone, cnpj_cpf, tipo_estabelecimento, horario_funcionamento, status_estabelecimento, nome_fantasia, fotos_lugar, descricao } = req.body
    const sql = `UPDATE tbl_fornecedor SET razao_social = ?, telefone = ?, CNPJ_CPF = ?, tipo_estabelecimento = ?, horario_funcionamento = ?, status_estabelecimento = ?, nome_fantasia = ?, fotos_lugar = ?, descricao = ? WHERE cod_fornecedor = ${id}`
    
    connection.query(sql, [razao_social, telefone, cnpj_cpf, tipo_estabelecimento, horario_funcionamento, status_estabelecimento, nome_fantasia, fotos_lugar, descricao], (error, rows, fields) => {
        if (!error) {
            res.send('Dados alterados com sucesso!')
        } else {
            res.send('Erro ao alterar os dados.')
        }
    })
})

router.put('/categorias/:id', (req, res) => {
    const id = req.params
    const { nome, foto, descricao } = req.body
    const sql = `UPDATE tbl_categoria SET nome_categoria = ?, foto = ?, descricao = ? WHERE cod_categoria = ${id}`
    
    connection.query(sql, [nome, foto, descricao], (error, rows, fields) => {
        if (!error) {
            res.send('Dados alterados com sucesso!')
        } else {
            res.send('Erro ao alterar os dados.')
        }
    })
})

router.put('/usuarios/:id', (req, res) => {
    const id = req.params
    const { nome, senha, email, email_recuperacao, tipo_conta, foto_usuario, background_perfil, descricao } = req.body
    const sql = `UPDATE tbl_usuario SET nome_usuario = ?, senha = ?, email = ?, email_recuperacao = ?, tipo_de_conta = ?, foto_usuario = ?, backgroud_perfil = ?, descricao = ? WHERE cod_usuario = ${id}`
    
    connection.query(sql, [nome, senha, email, email_recuperacao, tipo_conta, foto_usuario, background_perfil, descricao], (error, rows, fields) => {
        if (!error) {
            res.send('Dados alterados com sucesso!')
        } else {
            res.send('Erro ao alterar os dados.')
        }
    })
})

router.put('/formaspagamento/:id', (req, res) => {
    const id = req.params
    const { tipo_pagamento, descricao, cpf } = req.body
    const sql = `UPDATE tbl_forma_pagamento SET tipo_de_pagamento = ?, descricao = ?, CPF = ? WHERE cod_pagamento = ${id}`
    
    connection.query(sql, [tipo_pagamento, descricao, cpf], (error, rows, fields) => {
        if (!error) {
            res.send('Dados alterados com sucesso!')
        } else {
            res.send('Erro ao alterar os dados.')
        }
    })
})

router.put('/pedidos/:id', (req, res) => {
    const id = req.params
    const { data_pedido, status_pedido, descricao } = req.body
    const sql = `UPDATE tbl_pedido SET data_pedido = ?, status_pedido = ?, descricao = ? WHERE cod_pedido = ${id}`
    
    connection.query(sql, [data_pedido, status_pedido, descricao], (error, rows, fields) => {
        if (!error) {
            res.send('Dados alterados com sucesso!')
        } else {
            res.send('Erro ao alterar os dados.')
        }
    })
})

router.put('/servicos/:id', (req, res) => {
    const id = req.params
    const { nome, valor, qtde_avaliacoes, descricao, duracao, foto } = req.body
    const sql = `UPDATE tbl_servicos SET nome_servico = ?, valor = ?, qtde_avaliacoes = ?, descricao = ?, duracao = ?, foto = ? WHERE cod_servicos = ${id}`
    
    connection.query(sql, [nome, valor, qtde_avaliacoes, descricao, duracao, foto], (error, rows, fields) => {
        if (!error) {
            res.send('Dados alterados com sucesso!')
        } else {
            res.send('Erro ao alterar os dados.')
        }
    })
})

router.put('/classificacoes/:id', (req, res) => {
    const id = req.params
    const { nota, descricao } = req.body
    const sql = `UPDATE tbl_classificacao SET nota = ?, descricao = ? WHERE cod_classificacao = ${id}`
    
    connection.query(sql, [nota, descricao], (error, rows, fields) => {
        if (!error) {
            res.send('Dados alterados com sucesso!')
        } else {
            res.send('Erro ao alterar os dados.')
        }
    })
})

router.put('/agendas/:id', (req, res) => {
    const id = req.params
    const { data_agenda, descricao } = req.body
    const sql = `UPDATE tbl_agenda SET data_agenda = ?, descricao = ? WHERE cod_agenda = ${id}`
    
    connection.query(sql, [data_agenda, descricao], (error, rows, fields) => {
        if (!error) {
            res.send('Dados alterados com sucesso!')
        } else {
            res.send('Erro ao alterar os dados.')
        }
    })
})

module.exports = router