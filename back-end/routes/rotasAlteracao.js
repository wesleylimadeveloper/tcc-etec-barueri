const express = require('express')
const connection = require('../util/database')
const router = express.Router()

router.put('/clientes/:id', (req, res) => {
    const { id } = req.params
    const { nome, sobrenome, email, telefone, sexo } = req.body
    const sql = 'UPDATE tbl_cliente SET nome_cliente = ?, sobrenome_cliente = ?, email_cliente = ?, telefone_cliente = ?, sexo_cliente = ? WHERE id_cliente = ?'
    
    connection.query(sql, [nome, sobrenome, email, telefone, sexo, id], (error, results, fields) => {
        if (!error) {
            res.send('Dados alterados com sucesso!')
        } else {
            res.send('Erro ao alterar os dados.')
        }
    })
})

module.exports = router