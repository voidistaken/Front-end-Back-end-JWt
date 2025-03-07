import express from "express";

const router = express.Router();
import { getAllUsers, getUserById, register, updateUserById,deleteUserById,login } from "../controllers/user_controller.js";
router.route("/").get(getAllUsers).post(register);
router.route("/:id").get(getUserById).patch(updateUserById).delete(deleteUserById);
router.route("/login").post(login);
export default router;