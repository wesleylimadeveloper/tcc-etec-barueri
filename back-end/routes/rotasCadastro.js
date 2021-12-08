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
    const { id_estabelecimento, id_cliente, id_servico, data_agenda, status_agenda } = req.body
    const sql = `INSERT INTO tbl_agenda(id_estabelecimento, id_cliente, id_servico, data_agenda, status_agenda) VALUES(?, ?, ?, ?, ?)`
    
    connection.query(sql, [id_estabelecimento, id_cliente, id_servico, data_agenda, status_agenda], (error, results, fields) => {
        if (!error) {
            res.send('Dados cadastrados com sucesso!')
        } else {
            res.send(error)
        }
    })
})

module.exports = router