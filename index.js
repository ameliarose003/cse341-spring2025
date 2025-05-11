const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const contactRoutes = require('./routes/contacts');
const {initDb} = require('./database/connect')
dotenv.config();

const { getAllContacts , getContactById} = require("./controllers/contactsController");
// require("./db"); // MongoDB connection
// express app
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
// initialize DB
initDb().then(() => {
  console.log("Database initialized");
  app.use('/contacts', contactRoutes);
  app.get("/contacts", getAllContacts);
  app.get("/contacts/:id", getContactById);
  app.get("/", (req, res) => {
    res.send("Welcome to my API!");
  });

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}).catch((err) => {
  console.error("Failed to connect to dadtabase", err);
});

// connection
// mongoose.connect(process.env.MONGODB_URI);
// const db = mongoose.connection;
// db.on("error", (error) => console.error(error));
// db.once("open", () => console.log("Connected to database"));

// Use the contacts route
// app.use('/contacts', require('./routes/contacts'));


