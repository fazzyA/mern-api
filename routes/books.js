const express = require('express');
const { getBooks, addBook } = require('../controllers/book');
const bookRouter = express.Router();
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

bookRouter.route('/').get(getBooks);
bookRouter.route('/upload')
    .post(upload.single('file'),
    async (req, res) => console.log('==', req.file));
bookRouter.route('/add').post(addBook); // in database
bookRouter.route('/update/:id').put();
module.exports = bookRouter;