const express = require('express')
const rotasCadastro = require('./routes/rotasCadastro')
const rotasListagem = require('./routes/rotasListagem')
const rotasAlteracao = require('./routes/rotasAlteracao')
const rotasExclusao = require('./routes/rotasExclusao')

const app = express()
const porta = 3000

app.use(express.json())
app.use(rotasCadastro)
app.use(rotasListagem)
app.use(rotasAlteracao)
app.use(rotasExclusao)

app.get('/', (req, res) => {
    res.send('TCC Etec de Barueri')
})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})