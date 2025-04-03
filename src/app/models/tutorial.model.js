const db = require('../config/db.config');

// Create Users table
const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL
    )
`;

db.query(createUsersTable, (err, result) => {
    if (err) throw err;
    console.log("Users table created or already exists.");
});

// Create Projects table
const createProjectsTable = `
    CREATE TABLE IF NOT EXISTS projects (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        FOREIGN KEY (user_id) REFERENCES users(id)
    )
`;

db.query(createProjectsTable, (err, result) => {
    if (err) throw err;
    console.log("Projects table created or already exists.");
});

// Export database connection
module.exports = db;
