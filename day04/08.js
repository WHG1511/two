var express=require("express")
var app=express()
var path=require("path")
app.engine("art",require("express-art-template"))
app.set("views",path.join(__dirname,"views"))
app.set("view engine","art")
app.get("/",(req,res,next)=>{
    var list=["首页","新闻","关于"]
    res.render("list",{list:list})
})
app.listen(3000)