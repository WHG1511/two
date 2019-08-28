var express=require("express")
var cookie=require("cookie-parser")
var app=express()
app.get("/",(req,res)=>{
    // console.log(res.cookie)
    var data=res.cookie("name","tom",{maxAge:9000,httpOnly:true})
    res.send()
})
app.get("/login",(req,res)=>{
    var data=res.cookie("name")
    // console.log(data)
    res.send(data)
})
app.listen(3000)