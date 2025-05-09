const express = require("express");
const { getAllContacts , getContactById} = require("./controllers/contactsController");
const mongoose = require("mongoose");
require("dotenv").config();
// require("./db"); // MongoDB connection
const PORT = process.env.PORT || 3000;
// express app
const app = express();
app.use(express.json());
// connection
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));
app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});
// Use the contacts route
// app.use('/contacts', require('./routes/contacts'));
app.get("/contacts", getAllContacts);
app.get("/contacts/:id", getContactById);
// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});