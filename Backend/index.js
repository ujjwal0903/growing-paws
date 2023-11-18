// const { MongoClient } = require('mongodb');

// const password = '246746';
// const dbName = 'growingpaws';

// const url = `mongodb+srv://souravrjpt:${password}@cluster0.ihep6ry.mongodb.net/`

// const client = new MongoClient(url);

// async function getData() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');

//     const db = client.db(dbName);
//     const collection = db.collection('signup');
//     const data = await collection.find({}).toArray();

//     console.log(data);
//   } catch (err) {
//     console.error('Error connecting to MongoDB:', err);
//   } finally {
//     await client.close();
//   }
// }

// getData();


const express = require('express');

// Initialize app
const app = express();

// Mongoose connection
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://souravrjpt:246746@cluster0.ihep6ry.mongodb.net/`);
const db = mongoose.connection;

// Check for DB connection
// db.once('open', function(){
//     console.log("Connected to MongoDB successfully!");
// });
// db.on('error', function(){
//     console.log(err);
// });

// Route for home
const signRoute=require('./routes/signup-route')
app.use('/sigup',signRoute)
app.get('/', function (req, res) {
    res.send('hello world')
});
// Start server with port 3000
app.listen(3000, function(){
    console.log("Server started on localhost:3000");
});
