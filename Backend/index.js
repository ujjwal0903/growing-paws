const express=require('express')
const app=express()
const cors=require('cors')
const path=require('path')
const BodyParser=require('body-parser')
// const signin=require('/Frontend/src/pages/sign-in.jsx')

app.use(cors());
app.use(BodyParser.json())


app.post("/signup",(req,res)=>{
    res.send(req.body)
    console.log(req.body)

})


app.listen(5000,()=>{
    console.log("connected at port 5000!!")
})