const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdtcc'
})

connection.connect((error) => {
    if (!error) {
        console.log('Conexão realizada com sucesso!')
    } else {
        console.log('Erro ao realizar conexão')
    }
})

module.exports = connection