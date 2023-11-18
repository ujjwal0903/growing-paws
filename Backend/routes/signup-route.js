const express=require('express')
const router=express.Router()


router.get('/',(req,res)=>{
    res.send('hurray its running')
})

module.exports=router