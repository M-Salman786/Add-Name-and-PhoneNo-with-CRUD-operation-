import mongoose from "mongoose";

const database1 = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    phone:{
        type: Number,
        require: true
    }
})

const PhoneBook = mongoose.model("PhoneBook",database1);
export default PhoneBook;