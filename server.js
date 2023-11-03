const express = require('express');
const session = require('express-session');

const app = express();

// Configure the session
app.use(session({
  secret: 'my_secret_key',
  resave: false,
  saveUninitialized: true
}));

// Connect to the database
const connection = require('./database');

// Create a login route
app.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Query the database to find the user with the given username
  const sql = 'SELECT * FROM users WHERE username = ?';
  const result = await connection.query(sql, [username]);

  if (result.length === 0) {
    // User not found
    res.status(404).json({ message: 'User not found' });
    return;
  }

  const user = result[0];

  // Verify the password
  if (user.password !== password) {
    // Incorrect password
    res.status(401).json({ message: 'Incorrect password' });
    return;
  }

  // Login successful!
  req.session.user = user;
  res.status(200).json({ message: 'Login successful' });
});

// Create a signup route
app.post('/signup', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Check if the user already exists
  const sql = 'SELECT * FROM users WHERE username = ?';
  const result = await connection.query(sql, [username]);

  if (result.length > 0) {
    // User already exists
    res.status(409).json({ message: 'User already exists' });
    return;
  }

  // Create a new user
  sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  await connection.query(sql, [username, password]);

  // Login the new user
  req.session.user = { username };
  res.status(201).json({ message: 'Signup successful' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});