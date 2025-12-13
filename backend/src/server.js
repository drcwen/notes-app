const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


const userRoutes = require('../routes/userRoutes');
app.use('/users', userRoutes);

/*
const loginRoutes = require('../routes/Login');
app.use('/login', loginRoutes);

const signupRoutes = require('../routes/SignUp');
app.use('/signup', signupRoutes); 
*/

const loginRoutes = require('../routes/myLogin');
app.use('/login', loginRoutes);

const signupRoutes = require('../routes/mySignUp');
app.use('/signup', signupRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});