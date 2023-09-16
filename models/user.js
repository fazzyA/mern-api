const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = Schema({
    name: {
        type: String,
        require: true
    },
    email: String,
    password: String,
    role: {
        type: String,
        default: 'customer'
    }
});
module.exports = mongoose.model('User', userSchema);
