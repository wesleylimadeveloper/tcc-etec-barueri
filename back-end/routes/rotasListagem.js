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

router.get('/clientes/:email', (req, res) => {
    const { email } = req.params
    const sql = 'SELECT * from tbl_cliente WHERE email_cliente = ?'

    connection.query(sql, [email], (error, results, fields) => {
        if (!error) {
            res.send(results)
        } else {
            res.send("Erro ao listar dados!")
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

router.get('/usuarios/:email/:senha', (req, res) => {
    const { email, senha } = req.params
    const sql = 'SELECT cod_usuario, senha, email, tipo_de_conta from tbl_usuario WHERE email = ? AND senha = ?'

    connection.query(sql, [email, senha], (error, results, fields) => {
        if (!error) {
            res.send(results)
        } else {
            res.send('Erro ao listar dados!')
        }
    })
})

router.get('/servicos', (req, res) => {
    const sql = 'SELECT * from tbl_servico'

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
    const sql = 'SELECT * from tbl_servico WHERE id_estabelecimento = ? ORDER BY valor_servico DESC'

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
    const sql = 'SELECT id_servico, nome_servico, valor_servico, s.id_estabelecimento, nome_fantasia, foto_estabelecimento FROM tbl_servico s JOIN tbl_estabelecimento e ON s.id_estabelecimento = e.id_estabelecimento JOIN tbl_categoria c ON s.id_categoria = c.id_categoria WHERE c.id_categoria = ? ORDER BY nome_fantasia'

    connection.query(sql, [id], (error, results, fields) => {
        if (!error) {
            res.send(results)
        } else {
            res.send(error)
        }

    })
})

router.get('/estabelecimentos', (req, res) => {
    const sql = 'SELECT id_estabelecimento, nome_fantasia, foto_estabelecimento, logradouro, numero, bairro, cidade FROM tbl_estabelecimento e JOIN tbl_endereco a ON e.id_endereco = a.id_endereco ORDER BY nome_fantasia'

    connection.query(sql, (error, results, fields) => {
        if (!error) {
            res.send(results)
        } else {
            res.send('Erro ao listar dados!')
        }
    })
})

router.get('/agendas/:id', (req, res) => {
    const { id } = req.params
    const sql = 'SELECT id_agenda, foto_estabelecimento, nome_fantasia, telefone_estabelecimento, id_servico, data_agenda, status_agenda FROM tbl_agenda a JOIN tbl_estabelecimento e ON a.id_estabelecimento = e.id_estabelecimento WHERE id_cliente = ? ORDER BY data_agenda'

    connection.query(sql, [id], (error, results, fields) => {
        if (!error) {
            res.send(results)
        } else {
            res.send('Erro ao listar dados!')
        }
    })
})

module.exports = router