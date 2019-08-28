
var express=require("express")
// 可以存储二级域名
var cookie=require("cookie-parser")
var app=express()
app.use(cookie())
app.get("/set",(req,res)=>{
// 存储
    res.cookie("username","admin",{maxAge:9000000,httpOnly:true})
    res.send("cookie设置成功")
})
app.get("/get",(req,res)=>{
    var data=req.cookies.username
    res.send({"data":data})
})
app.listen(3000)