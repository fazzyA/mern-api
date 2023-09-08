const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require('../models/user')

const getAllUsers = async (req, res) => {
    res.send([{id:1, name:"faiza", email:"faiza@gmail.com", password: "123456"}])
}
const handleRegister = async (req, res) => {
    // console.log('handleRegister', req.body)
    const { email, password, name } = req.body;
        // exist already or not
    // const isUser = await User.findOne({email});
    // if(isUser) return res.status(409).json({msg: "email alreay exist"})

    const hashPass = await bcrypt.hash(password, 10);
    const newUser = {
        name, email, password: hashPass
    }
    // let user = User.create(newUser);
    res.json({data: newUser})
}

const handleLogin = async (req, res) => {
    // console.log('handlelogin', req.body)
    const { email, password } = req.body;
    const registerUser = {
        "name": "faiza",
        "email": "dsa@dsa.co",
        "password": "$2b$10$7IWQhFfQiXV1y7Xpid6Dyu4BcVAh7ELKdwKa/x30iQH.XMs/M5quK"
    }
    const isMatch = await bcrypt.compare(password, registerUser.password)
    let token = ''
    if (isMatch) {
        token = jwt.sign(
            {email, password},
            'mysectret',
            { expiresIn: "1d" }
            );
    }
    console.log("🚀 ~ file: users.js:32 ~ handleLogin ~ isMatch:", isMatch)
    res.cookie("jwt", token, {
        httpOnly: true,
        sameSite: "None",
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

    res.send(`loggedin ${token}`)
}
module.exports = {
    getAllUsers,
    handleLogin,
    handleRegister
}