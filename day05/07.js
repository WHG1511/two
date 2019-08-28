var express=require("express")
var app=express()
app.all("*",(req,res,next)=>{
    //请求源  允许所以域名进行访问
    res.header("Access-Conntrol-Allow-origin","*")
    //定义内容类型
    res.header("Access-Conntrol-Allow-Content","Content-type")
    //定义允许跨域访问的请求方式
    res.header("Access-Conntrol-Allow-Method","GET","POST","PUT","PATCH","DELETE","OPTIONS")
    //判断
    next()
})






app.listen(3000)
