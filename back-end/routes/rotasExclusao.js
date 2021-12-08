const express = require('express')
const connection = require('../util/database')
const router = express.Router()

router.delete('/clientes/:id', (req, res) => {
    const { id } = req.params
    const sql = `DELETE from tbl_cliente WHERE id_cliente = ${id}`

    connection.query(sql, (error, results, fields) => {
        if (!error) {
            res.send('Dados excluidos com sucesso!')
        } else {
            res.send('Erro ao tentar excluir dados.')
        }
    })
})

router.delete('/agendas/:id', (req, res) => {
    const { id } = req.params
    const sql = `DELETE from tbl_agenda WHERE id_agenda = ${id}`

    connection.query(sql, (error, results, fields) => {
        if (!error) {
            res.send('Dado excluido com sucesso!')
        } else {
            res.send(error)
        }
    })
})

module.exports = router