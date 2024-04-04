const mysql = require('mysql')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Zefilho1',
    database: 'react-robin',
})

module.exports = pool