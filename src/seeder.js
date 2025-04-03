const db = require('./app/config/db.config');

// Clear existing data
db.query('DELETE FROM users', () => {});
db.query('DELETE FROM projects', () => {});

// Insert Users
const insertUsers = `INSERT INTO users (name, email) VALUES 
    ('John Doe', 'john@example.com'),
    ('Jane Smith', 'jane@example.com')`;

db.query(insertUsers, (err, result) => {
    if (err) throw err;
    console.log("Inserted users");

    // Insert Projects
    const insertProjects = `INSERT INTO projects (user_id, title, description) VALUES 
        (1, 'Project A', 'Description A'),
        (1, 'Project B', 'Description B'),
        (2, 'Project C', 'Description C')`;

    db.query(insertProjects, (err, result) => {
        if (err) throw err;
        console.log("Inserted projects");
        process.exit(); // Exit script after seeding
    });
});
