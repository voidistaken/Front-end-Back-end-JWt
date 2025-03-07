import express from "express";
import { authMiddleware } from "../utils/middlewares.js";
const router = express.Router();
import { getAllBooks, getBookById, addBook, updateBookById, deleteBookById } from "../controllers/book_controller.js";

router.route("/").get(authMiddleware, getAllBooks).post(authMiddleware, addBook);
router.route("/:id").get(authMiddleware, getBookById).patch(authMiddleware, updateBookById).delete(authMiddleware, deleteBookById);
export default router;