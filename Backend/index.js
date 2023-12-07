const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const BodyParser = require('body-parser');
const mongoose = require('mongoose');
// const signin=require('/Frontend/src/pages/sign-in.jsx')

app.use(express.urlencoded({ extended: false }));



//------mongoDB connection-----------
main().catch((err) => console.log(err));

async function main() {
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



//------making model for mongodb
const User = mongoose.model('User', userSchema);


app.use(cors());
app.use(BodyParser.json());


app.get('/user/:email', async (req, res) => {
    try {
      let user = await User.exists({ email: req.query.email});
     
        
      if (user) {
        console.log('User exists');
        // res.status(200).json({ exists: true });
        res.send('exist')
        
      } else {
        console.log('User does not exist');
        // res.status(404).json({ exists: false });
        res.send('doesnt exist')
      }
    } catch (error) {
      console.error('Error checking user existence:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  



app.post('/signup', async (req, res) => {
  let user = new User();
  user.fullName = req.body.fullname;
  user.userName = req.body.username;
  user.Email = req.body.email;
  user.password = req.body.password;

  const doc = await user.save();
  res.send(doc);
  console.log(doc);
});

// const User = mongoose.model('User', Schema({ name: String, email: String }));

// Find a document by name

app.listen(5000, () => {
  console.log('connected at port 5000!!');
});
