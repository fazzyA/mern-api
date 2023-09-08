const express = require('express');
const userController = require('../controllers/users');
const simple = require('../middleware/simple');
const userRouter = express.Router();

userRouter
.route('/')
.get(
    simple,
    userController.getAllUsers
    )
userRouter.route('/')
.post(
    userController.handleLogin
)
userRouter.route('/register')
.post(
    userController.handleRegister
)

module.exports = userRouter