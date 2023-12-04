const express=require('express')
const app=express()
const cors=require('cors')
const path=require('path')
const BodyParser=require('body-parser')
const mongoose=require('mongoose')
// const signin=require('/Frontend/src/pages/sign-in.jsx')


//------mongoDB connection-----------
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/project_db');
  console.log("db connected")
}

const userSchema=new mongoose.Schema({
    fullName:String,
    userName:String,
    Email:String,
    password:String

})

const User = mongoose.model('User', userSchema);



app.use(cors());
app.use(BodyParser.json())


app.post("/signup",async (req,res)=>{
    let user=new User();
    user.fullName=req.body.fullname;
    user.userName=req.body.username;
    user.Email=req.body.email;
    user.password=req.body.password;

    const doc= await user.save();
    res.send(doc)
    console.log(doc)

})



app.listen(5000,()=>{
    console.log("connected at port 5000!!")
})