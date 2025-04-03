const express = require('express');
const router = express.Router();
const db = require('../config/db.config');

// Get all users
router.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
});

// Get projects for a user
router.get('/user/:userId/projects', (req, res) => {
    const userId = req.params.userId;
    db.query('SELECT * FROM projects WHERE user_id = ?', [userId], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
});

module.exports = router;

