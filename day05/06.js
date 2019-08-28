var express=require("express")
var session=require("express-session")
var app=express()
app.use(session({
    name:"fcht",//session名称  默认为connect_id
    secret:"fcht",  //签名防止信息被篡改
    resave:false,         //强制保存session值
    cookie:("name","value",{originalMaxAge:9000,httpOnly:true}),
    saveUninitialized:true  //初始化
    
}))
app.get("/set",(req,res)=>{
    req.session.username="tom"
    res.send()
})
app.get("/get",(req,res)=>{
    console.log(req.session)
    if(req.session.username=="tom"){
        res.send("欢迎光顾"+req.session.username)
    }
})
app.listen(3000)
