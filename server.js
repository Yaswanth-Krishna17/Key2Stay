const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory user storage (for demonstration purposes)
let users = [];

// Load existing users from a JSON file
if (fs.existsSync('users.json')) {
    users = JSON.parse(fs.readFileSync('users.json'));
}

// Registration endpoint
app.post('/api/register', (req, res) => {
    const { name, contact, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = { name, contact, password: hashedPassword };
    users.push(newUser);
    fs.writeFileSync('users.json', JSON.stringify(users));
    res.status(201).send('User registered successfully');
});

// Login endpoint
app.post('/api/login', (req, res) => {
    const { contact, password } = req.body;
    const user = users.find(u => u.contact === contact);
    if (user && bcrypt.compareSync(password, user.password)) {
        res.send('Login successful');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
