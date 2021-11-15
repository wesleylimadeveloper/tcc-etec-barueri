const express = require('express')
const connection = require('../util/database')
const router = express.Router()

router.post('/clientes', (req, res) => {
    const { nome, sobrenome, email, senha, telefone, sexo } = req.body
    const sql = `INSERT INTO tbl_cliente(nome_cliente, sobrenome_cliente, email_cliente, senha_cliente, telefone_cliente, sexo_cliente) VALUES(?, ?, ?, ?, ?, ?)`
    
    connection.query(sql, [nome, sobrenome, email, senha, telefone, sexo], (error, results, fields) => {
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