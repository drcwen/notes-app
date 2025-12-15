const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/notes', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    const currentUser = await User
      .findById(userId)
      .select('email username firstName lastName')
      .lean();

    if (!currentUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(currentUser);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
