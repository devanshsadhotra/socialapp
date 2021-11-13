console.log("hello from D-talks, wassup! ")
import express from "express";
const app= express()
import dateFormat, { masks } from "dateformat";
const PORT = process.env.PORT || 4000
 
app.get("/",(req, res)=>{
    res.status(200).send("<h1>hello from loc</h1>")

})

app.get("/api/v1/instagram",(req,res)=>{
    const instaSocial={
        userName:"devanshsadhotra",
        followers: 1300,
        follows:800,
        date:  dateFormat(Date.now(), "dddd, mmmm dS, yyyy, h:MM:ss TT")

    }
    res.status(200).json(instaSocial)
})
app.get("/api/v1/facebook",(req,res)=>{
    const facebookSocial={
        userName:"devanshsadhotra",
        followers: 1200,
        follows:800,
        date: dateFormat(Date.now(), "dddd, mmmm dS")
    }
    res.status(200).json(facebookSocial)
})
app.get("/api/v1/linkedIn",(req,res)=>{
    const linkedInSocial={
        userName:"devansh sadhotra",
        followers: 500,
        follows:120,
        date: dateFormat(Date.now(), "dddd, mmmm dS, yyyy,")
    }
    res.status(200).json(linkedInSocial)
})
app.get("/api/v1/:token",(req,res)=>{
    console.log(req.params.token)
    res.status(200).json({ param:req.params.token})
})
app.listen(PORT,()=>{
    console.log("server is running at ", PORT )
})
