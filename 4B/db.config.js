const mysql = require('mysql');
const connectionOption = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'programmer'
};
const connection = mysql.createConnection(connectionOption);
connection.connect((err) => {
    if (err) throw err;
    console.log("Database Connected!");
});
module.exports = connection;