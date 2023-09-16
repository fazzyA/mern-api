const express = require('express');
const { getBooks, addBook } = require('../controllers/book');
const bookRouter = express.Router();

bookRouter.route('/').get(getBooks);
bookRouter.route('/add').post(addBook);
bookRouter.route('/update/:id').put();
module.exports = bookRouter;