
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB

mongoose.connect('mongodb+srv://drcwen:Mariaandrea13@cluster0.l2iuuyo.mongodb.net/?appName=Cluster0')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


const userRoutes = require('../routes/userRoutes');
app.use('/users', userRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});