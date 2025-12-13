
const express = require('express');
const router = express.Router();
const user = require('../models/User');

const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    const {firstName, lastName, username, email, password, confirmPassword} = req.body;

    if(password !== confirmPassword) {

        return res.status(400).json({error: "Password do not match"});

    } else {

        try {
            const existingUser = await user.findOne({username});

            if (existingUser) {
                return res.status(400).json({ error: "Username exist."});
            } else {

                const saltRounds = 10;
                const hashedPassword = await bcrypt.hash(password, saltRounds);

                const newUser = new user({
                    firstName, 
                    lastName,
                    username,
                    email,
                    password: hashedPassword
                });

                await newUser.save();

                return res.status(201).json({
                    message: "User created successfully."
                })
            }
            
        } catch (err) {
            res.status(400).json({ error: err.message})
        }
    }
});

module.exports = router;