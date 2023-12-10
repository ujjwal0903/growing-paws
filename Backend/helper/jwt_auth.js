const jwt=require('jsonwebtoken')
const createError=require('http-errors')

module.exports={
    //this is for the signAccessToken 
    signAccessToken:(userId)=>
    {
        return new Promise((res,rej)=>{
            //signAccessToken takes three parameter payload, secretkey, option
            const payload={}
            const secret=process.env.ACCESS_TOKEN_SECRET
            const option={
                expiresIn:'1h',
                issuer:"http://localhost:3000",
                audience:[userId],
            }
            jwt.sign(payload,secret,option,(err,token)=>{
                if(err)
                rej(err)
                res(token)
            })
        })
    }
}