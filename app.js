const express = require('express');
const userRouter = require('./routes/user');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors())
const port = 5000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// middleware function
function loggerMiddle(req, res, next) {
    console.log('i am middleware')
    next();
}

// app.use(loggerMiddle)
// routing
//app.METHOD(PATH, HANDLER)
// app.get('/', (req, res) => {
//     res.send('hello world')
// });
app.use('/user', userRouter)

app.listen(port, () => console.log('app is running on ', port))