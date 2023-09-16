const express = require('express');
const userRoute = require('./routes/users');
const mongoose = require('mongoose');
const cors = require('cors');
const bookRouter = require('./routes/books');

const app = express();
const port = 5000;

app.use(cors())
app.use(express.json());
app.use('/user', userRoute);
app.use('/books', bookRouter);
// app.post('/', (req, res) => {
//     console.log(req.body)
//     res.status(200).send('OK');
// })

mongoose.connect('mongodb+srv://freelanceUser:sadaf123@cluster0.h6by4.mongodb.net/faiza?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true')
  .then(() => console.log('Connected!'));

app.listen(5000, () => {
    console.log(`server is running at ${port}`)
})