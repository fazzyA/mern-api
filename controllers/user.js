const User = require("../models/user");


const getUsers = async (req, res) => {
    res.send([{id:1, email: "faz@gmail.com"}])
}

const handleRegister = async (req, res) => {
    console.log('createUser')
    const {name, email, password} = req.body;
    // alerady registerd check
    // password hash
    const newUser = {
        name,
        email,
        password
    }
    const checkUser = await User.findOne({email});
    console.log("🚀 checkUser:", checkUser)
    if(checkUser) {
        return res.send('email already exist')
    }
    const user = await User.create(newUser);
    res.status(201).send({
        message: 'user created',
        data: user
    });
}

const handleLogin = async (req, res) => {
    const {email, password} = req.body;
    console.log(email, password);
    res.send(`${email} is logged in`)
}

module.exports = {
    getUsers,
    handleLogin,
    handleRegister
}