require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const BodyParser = require('body-parser');
const mongoose = require('mongoose');
const Collection=require('mongoose')
const bcrypt = require('bcrypt')
const {signAccessToken}= require('./helper/jwt_auth')
// const signin=require('/Frontend/src/pages/sign-in.jsx')

app.use(express.urlencoded({ extended: false }));



//------mongoDB connection-----------
main().catch((err) => console.log(err));

async function main(){
  await mongoose.connect('mongodb://127.0.0.1:27017/project_db');
  console.log('db connected');
}

//-----making schema
const userSchema = new mongoose.Schema({
  fullName: String,
  userName: String,
  Email: String,
  password: String,
});


app.use(cors());
app.use(BodyParser.json());



//-------this is for login of the user
app.post('/userlogin', async (req, res) => {
  try{
    let usercheck=await User.findOne({Email:req.body.email})
    console.log("user exist",usercheck)
    
  }
  catch{
    console.log("user not found")
  }
})
  

//---------encryption of password
userSchema.pre('save',async function (next){
  try {
    const salt=await bcrypt.genSalt(10)
    const hashedpassword=await bcrypt.hash(this.password,salt)
    this.password=hashedpassword
    next()
  } catch (error) {
    next(error)
  }
})

//------making model for mongodb
const User = mongoose.model('User', userSchema);


//----------this is for signup of the user 
app.post('/signup', async (req, res) => {
  let user = new User();

  user.fullName = req.body.fullname;
  user.userName = req.body.username;
  user.Email = req.body.email;
  user.password = req.body.password;

  //--- saving the data of the user from signup form to database
  
  const saveuser = await user.save();
  const  accessToken=await signAccessToken(saveuser._id)  
  res.send(accessToken);
  console.log(accessToken);
});

// const User = mongoose.model('User', Schema({ name: String, email: String }));

// Find a document by name

app.listen(5000, () => {
  console.log('connected at port 5000!!');
});
