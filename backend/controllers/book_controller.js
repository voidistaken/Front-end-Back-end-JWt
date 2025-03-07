import BookModel from "../models/book_model.js";
export async function getAllBooks(req, res) {
    try {
        const books = await BookModel.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json(error.message);
    }
}
export async function getBookById(req, res) {
    try {
        const book = await BookModel.findById(req.params.id)
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json(error.message);
    }
}
export async function addBook(req, res) {
    try {
        const book = await BookModel.create(req.body)
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json(error.message);
    }
}
export async function updateBookById(req, res) {
    try {
        const book = await  BookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json(error.message);
    }
}
export async function deleteBookById(req, res) {
    try {
        const book = await BookModel.findByIdAndDelete(req.params.id);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json(error.message);
    }
}