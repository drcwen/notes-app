
const express = require('express');
const router = express.Router();
const user = require('../models/User')
const authMiddleware = require('../middleware/authMiddleware');

router.get('/notes', authMiddleware, async (req, res) => {
    res.json({
        message: "This is a protected route.",
        loggedInUser: req.user
    })
});

module.exports = router;