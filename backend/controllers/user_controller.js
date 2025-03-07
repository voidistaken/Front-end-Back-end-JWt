import UserModel from "../models/user_model.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
export async function getAllUsers(req, res) {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export async function getUserById(req, res) {
    try {
        const user = await UserModel.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export async function register(req, res) {
    try {
        let user = req.body;
        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, salt)
        user = await UserModel.create(user);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export async function updateUserById(req, res) {
    try {
        let user = req.body;
        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, salt);
        user =await UserModel.findByIdAndUpdate(req.params.id, user, { new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export async function deleteUserById(req, res) {
    try {
        const user =await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export async function login(req, res) {
    try {
        const user = await UserModel.findOne({ email: req.body.email })
        if (user && await bcrypt.compare(req.body.password, user.password)) {
            const token = jwt.sign({}, process.env.SECRET_KEY);
            return res.status(200).json({token: token});
        }
        res.status(400).json({ message: "email or password incorrect" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}