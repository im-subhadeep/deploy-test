const express = require('express');
const router = express.Router();

// POST endpoint to send doctor data
router.post('/doctordata', (req, res) => {
    try {
        res.send([global.doctordata]);
    } catch (error) {
        console.log(error.message);
        res.send('Server error');
    }
});

// GET endpoint to retrieve all doctor data
router.get('/doctordata', (req, res) => {
    try {
        if (!global.doctordata) {
            throw new Error("Doctor data is not loaded");
        }
        res.json(global.doctordata);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;