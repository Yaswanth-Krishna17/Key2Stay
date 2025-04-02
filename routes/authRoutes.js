const express = require("express");
const mysql = require("mysql2");
const router = express.Router();

// 🔹 Connect to MySQL Database
const db = mysql.createConnection({
    host: "localhost",  
    user: "root",       
    password: "Heena@123",       
    database: "key2stay_db" 
});

// 🔹 Login API
router.post("/login", (req, res) => {
    const { mobile, password } = req.body;

    if (!mobile || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // 🔹 Check if user exists in database
    const query = "SELECT * FROM users WHERE mobile = ?";
    db.query(query, [mobile], (err, results) => {
        if (err) return res.status(500).json({ message: "Database error", error: err });

        if (results.length === 0) {
            return res.status(401).json({ message: "User not found" });
        }

        const user = results[0];

        // ✅ Compare entered password with database password (without hashing)
        if (password !== user.password) {
            return res.status(401).json({ message: "Incorrect password" });
        }

        // 🔹 Send success response
        res.json({ message: "Login successful", user: { name: user.name, mobile: user.mobile } });
    });
});

module.exports = router;
