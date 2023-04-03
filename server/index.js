import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import PhoneBook from "./Models/PhoneBook.js";

const app = express();
app.use(express.json())
app.use(cors())

const PORT = 5010;

const DB_URL = "mongodb+srv://mern:MERN@cluster0.nmswu.mongodb.net/routerPhoneBook?retryWrites=true&w=majority";
mongoose
    .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log("db connected"))
    .catch((err)=>console.log(err))

// const addPhone = async ()=>{
//     const phone1 = PhoneBook({name:"Salman",phone:"1234"});
//     await phone1.save();
// }
// addPhone();

// app.get('/',(req,res)=> res.send("hi"))
// app.get('/:id',(req,res)=>{
//     res.send(`You Entered ${req.params.id}`)
// })
app.get('/phoneNumbers',async (req,res)=>{
    const phoneData = await PhoneBook.find({});
    res.status(200).json(phoneData);
})

app.post('/addPhoneNumber',async (req,res)=>{
    const addPhone = PhoneBook(req.body);
    await addPhone.save()
    res.status(200).json(addPhone);
})

app.delete('/delete-phone/:id',async (req,res)=>{
    await PhoneBook.findByIdAndDelete(req.params.id);
    res.status(200).json({success:true})
} )

app.get('/get-phone/:id',async (req,res)=>{
    const details = await PhoneBook.findById(req.params.id);
    res.status(200).json(details);
})
app.patch('/update-phone/:id', async (req,res)=>{
    const contact = await PhoneBook.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json(contact);
})
app.listen(PORT,()=>console.log("Server is listning at",PORT))
