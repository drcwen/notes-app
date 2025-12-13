
const express = require('express');
const router = express.Router();
const user = require('../models/User')
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    try {
        const findUser = await user.findOne({ username });

        if (!findUser) {
            return res.status(400).json({ error: "Can't find user."});
        } else {
            const isMatch = await bcrypt.compare(password,  findUser.password);

            if(!isMatch) {
                return res.status(400).json({ error: "Password do not match."});
            } else {
                return res.status(200).json({ message: "Successfully login "});
            }
        }

    } catch (err) {
        return res.status(400).json({ error: err});
    }
});

module.exports = router;