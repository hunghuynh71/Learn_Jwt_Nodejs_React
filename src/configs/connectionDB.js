import mysql from 'mysql2';

//config database
const connectionDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'db_jwt_nodejs_react'
});

export default connectionDB;