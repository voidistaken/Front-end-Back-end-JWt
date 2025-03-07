import mongoose from "mongoose";
const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    author:{
        type:String,
        required:true
    }
},{timestamps:true});
const BookModel = mongoose.model("Book", bookSchema);
export default BookModel;