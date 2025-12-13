

const express = require('express');
const router = express.Router();
const User = require('../models/User');

//SIGN UP USER

router.post('/', async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword} = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" } );
    } else {
        try {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ error: "Email already in use" });
            } else {
                const newUser = new User({
                    firstName,
                    lastName,
                    email,
                    password
                });
                await newUser.save();

                return res.status(201).json({
                    message: "User registered successfully"
                });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
});

module.exports = router;