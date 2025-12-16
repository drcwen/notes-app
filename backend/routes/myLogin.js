
const express = require('express');
const router = express.Router();
const user = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const findUser = await user.findOne({ username });

        if (!findUser) {
            return res.status(400).json({ error: "Can't find user."});
        } 

        const isMatch = await bcrypt.compare(password,  findUser.password);

        if(!isMatch) {
            return res.status(400).json({ error: "Password do not match."});
        } 

        const token = jwt.sign(
            { id: findUser._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return res.status(200).json({
            message: "Successfully logged in",
            token,
            user: {
                id: findUser._id,
                username: findUser.username,
            }
        });

    } catch (err) {
        return res.status(400).json({ error: err.message || err });
    }
});

module.exports = router;