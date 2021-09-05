const express = require('express')
const connection = require('../util/database')
const router = express.Router()

router.get('/clientes', (req, res) => {
    const sql = 'SELECT * from tbl_cliente'

    connection.query(sql, (error, results, fields) => {
        if (!error) {
            res.send(results)
        } else {
            res.send('Erro ao listar dados!')
        }
    })
})

router.get('/enderecos', (req, res) => {
    const sql = 'SELECT * from tbl_endereco'

    connection.query(sql, (error, results, fields) => {
        if (!error) {
            res.send(results)
        } else {
            res.send('Erro ao listar dados!')
        }
    })
})

router.get('/enderecos/cliente/:id', (req, res) => {
    const { id } = req.params
    const sql = 'SELECT logradouro, numero, cidade, uf, cep FROM tbl_endereco e JOIN tbl_cliente c ON e.cod_endereco = c.cod_endereco WHERE c.cod_cliente = ?'

    connection.query(sql, [id], (error, results, fields) => {
        if (!error) {
            res.send(results)
        } else {
            res.send('Erro ao listar dados!')
        }
    })
})

router.get('/fornecedores', (req, res) => {
    const sql = 'SELECT * from tbl_fornecedor'

    connection.query(sql, (error, results, fields) => {
        if (!error) {
            res.send(results)
        } else {
            res.send('Erro ao listar dados!')
        }
    })
})

router.get('/categorias', (req, res) => {
    const sql = 'SELECT * from tbl_categoria'

    connection.query(sql, (error, results, fields) => {
        if (!error) {
            res.send(results)
        } else {
            res.send('Erro ao listar dados!')
        }
    })
})

router.get('/usuarios', (req, res) => {
    const sql = 'SELECT * from tbl_usuario'

    connection.query(sql, (error, results, fields) => {
        if (!error) {
            res.send(results)
        } else {
            res.send('Erro ao listar dados!')
        }
    })
})

router.get('/formaspagamento', (req, res) => {
    const sql = 'SELECT * from tbl_forma_pagamento'

    connection.query(sql, (error, results, fields) => {
        if (!error) {
            res.send(results)
        } else {
            res.send('Erro ao listar dados!')
        }
    })
})

router.get('/pedidos', (req, res) => {
    const sql = 'SELECT * from tbl_pedido'

    connection.query(sql, (error, results, fields) => {
        if (!error) {
            res.send(results)
        } else {
            res.send('Erro ao listar dados!')
        }
    })
})

router.get('/servicos', (req, res) => {
    const sql = 'SELECT * from tbl_servicos'

    connection.query(sql, (error, results, fields) => {
        if (!error) {
            res.send(results)
        } else {
            res.send('Erro ao listar dados!')
        }

    })
})

router.get('/servicos/:id', (req, res) => {
    const { id } = req.params
    const sql = 'SELECT * from tbl_servicos WHERE cod_fornecedor = ? ORDER BY valor DESC'

    connection.query(sql, [id], (error, results, fields) => {
        if (!error) {
            res.send(results)
        } else {
            res.send(error)
        }

    })
})

router.get('/servicos/categoria/:id', (req, res) => {
    const { id } = req.params
    const sql = 'SELECT cod_servicos, nome_servico, valor, s.cod_fornecedor, nome_fantasia, fotos_lugar from tbl_servicos s JOIN tbl_fornecedor f ON s.cod_fornecedor = f.cod_fornecedor JOIN tbl_categoria c ON s.cod_categoria = c.cod_categoria WHERE c.cod_categoria = ? ORDER BY valor DESC'

    connection.query(sql, [id], (error, results, fields) => {
        if (!error) {
            res.send(results)
        } else {
            res.send(error)
        }

    })
})

router.get('/classificacoes', (req, res) => {
    const sql = 'SELECT * from tbl_classificacao'

    connection.query(sql, (error, results, fields) => {
        if (!error) {
            res.send(results)
        } else {
            res.send('Erro ao listar dados!')
        }
    })
})

router.get('/agendas', (req, res) => {
    const sql = 'SELECT * from tbl_agenda'

    connection.query(sql, (error, results, fields) => {
        if (!error) {
            res.send(results)
        } else {
            res.send('Erro ao listar dados!')
        }
    })
})

router.get('/estabelecimentos', (req, res) => {
    const sql = 'SELECT cod_fornecedor, nome_fantasia, fotos_lugar, logradouro, numero, cidade FROM tbl_fornecedor f JOIN tbl_endereco e ON f.cod_endereco = e.cod_endereco ORDER BY nome_fantasia'

    connection.query(sql, (error, results, fields) => {
        if (!error) {
            res.send(results)
        } else {
            res.send('Erro ao listar dados!')
        }
    })
})

router.get('/perfil/usuario/:id', (req, res) => {
    const { id } = req.params
    const sql = 'SELECT nome_usuario, email, foto_usuario, nome_cliente, telefone FROM tbl_usuario u JOIN tbl_cliente c ON u.cod_usuario = c.cod_usuario WHERE u.cod_usuario = ?'

    connection.query(sql, [id], (error, results, fields) => {
        if (!error) {
            res.send(results)
        } else {
            res.send('Erro ao listar dados!')
        }
    })
})

module.exports = router