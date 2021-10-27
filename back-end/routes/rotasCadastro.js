const express = require('express')
const connection = require('../util/database')
const router = express.Router()

router.post('/clientes', (req, res) => {
    const { nome, telefone, data_nascimento, sexo, descricao } = req.body
    const sql = `INSERT INTO tbl_cliente(nome_cliente, telefone, dt_nascimento, sexo, descricao) VALUES(?, ?, ?, ?, ?)`
    
    connection.query(sql, [nome, telefone, data_nascimento, sexo, descricao], (error, results, fields) => {
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
    
    connection.query(sql, [data_agenda, descricao], (error, results, fields) => {
        if (!error) {
            res.send('Dados cadastrados com sucesso!')
        } else {
            res.send('Erro ao cadastrar os dados.')
        }
    })
})

module.exports = router