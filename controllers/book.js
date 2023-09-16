const Book = require("../models/book")

const getBooks = async (req, res) => {
    const books = await Book.find();
    res.status(200).send({data:books, message: 'all books'})
}

const addBook = async (req, res) => {
    const {name, desc, author, image, price} = req.body;
    const newBook = {
        name, desc, author, image, price
    }
    const book = await Book.create(newBook);
    res.status(201).send({data: book, message: 'book is added'})
}

module.exports = {
    getBooks,
    addBook
}