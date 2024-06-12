const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoDB = require('./db');

dotenv.config({ path: './config.env' });

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON request bodies
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api/prescription', require('./Routes/Prescription'));

// Simple GET route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Initialize database connection and start server
mongoDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(err => {
    console.error("Failed to connect to the database. Server not started.", err);
});
