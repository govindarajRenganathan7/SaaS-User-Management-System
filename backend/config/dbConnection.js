const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const mysql = require('mysql2');

const connection = mysql.createConnection(
    {
        host:DB_HOST,
        user:DB_USER,
        password:DB_PASSWORD,
        database:DB_NAME
    }
)

connection.connect((err) => { 
    if(err) throw new Error("Data Base Connectivity Error",err);
     
    console.log("Database Connected successfully");
    
    const createTableQuery = `CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        email  VARCHAR(255) NOT NULL,
        company VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `
    connection.query(createTableQuery,(err, results) => {
        if(err){
            console.error(err)
            return;
        }
        console.log(`Table \'users\' ensured to exists.`)
    })
})

module.exports = connection;