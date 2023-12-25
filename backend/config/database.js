// get the client
import mysql from 'mysql2';
// const mysql = require('mysql2');

// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'data_nha_thuoc'
});

db.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });

export default db;