const express = require('express')
const connection = require('../util/database')
const router = express.Router()

router.put('/clientes/:id', (req, res) => {
    const id = req.params
    const { nome, telefone, data_nascimento, sexo, descricao } = req.body
    const sql = `UPDATE tbl_cliente SET nome_cliente = ?, telefone = ?, dt_nascimento = ?, sexo = ?, descricao = ? WHERE cod_cliente = ${id}`
    
    connection.query(sql, [nome, telefone, data_nascimento, sexo, descricao], (error, results, fields) => {
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
    
    connection.query(sql, [data_agenda, descricao], (error, results, fields) => {
        if (!error) {
            res.send('Dados alterados com sucesso!')
        } else {
            res.send('Erro ao alterar os dados.')
        }
    })
})

module.exports = router