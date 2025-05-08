const express = require('express');
const app = express();
require('dotenv').config();
require('./db'); // MongoDB connection

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

// Use the contacts route
app.use('/contacts', require('./routes/contacts'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
