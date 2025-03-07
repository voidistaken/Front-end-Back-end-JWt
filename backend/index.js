import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import bookRouter from "./routes/book_routes.js";
import userRouter from "./routes/user_routes.js"
const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
app.use(morgan('combined'));

app.use("/api/books",bookRouter);
app.use("/api/users", userRouter);
mongoose.connect(process.env.DB_URL).then((result)=>{
    app.listen(process.env.SERVER_PORT,()=>{
        console.log(`server running on port ${process.env.SERVER_PORT}`);
    })
})