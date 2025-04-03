// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: 'localhost',  // or 127.0.0.1
//     user: 'root',       // your MySQL username
//     password: 'mysqlroot', // your MySQL password
//     database: 'node_project' // the database you created
// });

// connection.connect((err) => {
//     if (err) {
//         console.error('Database connection failed: ' + err.stack);
//         return;
//     }
//     console.log('Connected to MySQL database.');
// });

// // module.exports = connection;

// require('dotenv').config(); // Load environment variables
// const mysql = require('mysql2'); // Import mysql2 package

// // Create a database connection using .env variables
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT
// });

// // Attempt to connect to MySQL
// connection.connect((err) => {
//     if (err) {
//         console.error('❌ Database connection failed:', err.message);
//     } else {
//         console.log('✅ Connected to MySQL database.');
//     }
// });

// module.exports = connection; // Export connection for use in other files



require('dotenv').config(); // Load environment variables
const mysql = require('mysql2'); // Import mysql2 package

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3307
};

const connection = mysql.createConnection(dbConfig);

// Attempt to connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('❌ Database connection failed:', err.message);
    } else {
        console.log('✅ Connected to MySQL database.');
    }
});

module.exports = connection;
