const express = require('express');
const router = express.Router();

router.post('/doctordata', (req, res) => {
    try {
        res.send([global.doctordata]);
    } catch (error) {
        console.log(error.message);
        res.send('Server error');
    }
});

module.exports = router;
