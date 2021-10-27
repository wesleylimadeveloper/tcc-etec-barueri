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