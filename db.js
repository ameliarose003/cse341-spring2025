// This sets up mongoose, which uses less code.
require('dotenv').config();
var express = require(express);
var app = express();
app.use(express.json());
const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

mongoose.connect(process.env.MONGODB_URI);


// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error'));
// db.once('open', () => console.log('Connected to MongoDB'));

const db = require("/database/connect.js")