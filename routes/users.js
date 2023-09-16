const express = require('express');
const { getUsers, handleLogin, handleRegister } = require('../controllers/user');
const userRoute = express.Router();

userRoute
    .route('/')
    .get(getUsers);
userRoute
    .route('/')
    .post(handleLogin);
userRoute
    .route('/register')
    .post(handleRegister);

module.exports = userRoute
