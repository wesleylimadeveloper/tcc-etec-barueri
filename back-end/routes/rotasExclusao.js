const express = require('express')
const connection = require('../util/database')
const router = express.Router()

router.delete('/clientes/:id', (req, res) => {
    const id = req.params
    const sql = `DELETE from tbl_cliente WHERE cod_cliente = ${id}`

    connection.query(sql, (error, results, fields) => {
        if (!error) {
            res.send('Dados excluidos com sucesso!')
        } else {
            res.send('Erro ao tentar excluir dados.')
        }
    })
})

router.delete('/enderecos/:id', (req, res) => {
    const id = req.params
    const sql = `DELETE from tbl_endereco WHERE cod_endereco = ${id}`

    connection.query(sql, (error, results, fields) => {
        if (!error) {
            res.send('Dados excluidos com sucesso!')
        } else {
            res.send('Erro ao tentar excluir dados.')
        }
    })
})

router.delete('/fornecedores/:id', (req, res) => {
    const id = req.params
    const sql = `DELETE from tbl_fornecedor WHERE cod_fornecedor = ${id}`

    connection.query(sql, (error, results, fields) => {
        if (!error) {
            res.send('Dados excluidos com sucesso!')
        } else {
            res.send('Erro ao tentar excluir dados.')
        }
    })
})

router.delete('/categorias/:id', (req, res) => {
    const id = req.params
    const sql = `DELETE from tbl_categoria WHERE cod_categoria = ${id}`

    connection.query(sql, (error, results, fields) => {
        if (!error) {
            res.send('Dados excluidos com sucesso!')
        } else {
            res.send('Erro ao tentar excluir dados.')
        }
    })
})

router.delete('/usuarios/:id', (req, res) => {
    const id = req.params
    const sql = `DELETE from tbl_usuario WHERE cod_usuario = ${id}`

    connection.query(sql, (error, results, fields) => {
        if (!error) {
            res.send('Dados excluidos com sucesso!')
        } else {
            res.send('Erro ao tentar excluir dados.')
        }
    })
})

router.delete('/formaspagamento/:id', (req, res) => {
    const id = req.params
    const sql = `DELETE from tbl_forma_pagamento WHERE cod_pagamento = ${id}`

    connection.query(sql, (error, results, fields) => {
        if (!error) {
            res.send('Dados excluidos com sucesso!')
        } else {
            res.send('Erro ao tentar excluir dados.')
        }
    })
})

router.delete('/pedidos/:id', (req, res) => {
    const id = req.params
    const sql = `DELETE from tbl_pedido WHERE cod_pedido = ${id}`

    connection.query(sql, (error, results, fields) => {
        if (!error) {
            res.send('Dados excluidos com sucesso!')
        } else {
            res.send('Erro ao tentar excluir dados.')
        }
    })
})

router.delete('/servicos/:id', (req, res) => {
    const id = req.params
    const sql = `DELETE from tbl_servicos WHERE cod_servicos = ${id}`

    connection.query(sql, (error, results, fields) => {
        if (!error) {
            res.send('Dados excluidos com sucesso!')
        } else {
            res.send('Erro ao tentar excluir dados.')
        }
    })
})

router.delete('/classificacoes/:id', (req, res) => {
    const id = req.params
    const sql = `DELETE from tbl_classificacao WHERE cod_classificacao = ${id}`

    connection.query(sql, (error, results, fields) => {
        if (!error) {
            res.send('Dados excluidos com sucesso!')
        } else {
            res.send('Erro ao tentar excluir dados.')
        }
    })
})

router.delete('/agendas/:id', (req, res) => {
    const id = req.params
    const sql = `DELETE from tbl_agenda WHERE cod_agenda = ${id}`

    connection.query(sql, (error, results, fields) => {
        if (!error) {
            res.send('Dados excluidos com sucesso!')
        } else {
            res.send('Erro ao tentar excluir dados.')
        }
    })
})

module.exports = router