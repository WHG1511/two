var express=require("express")
var bodyParser=require("body-parser")
var app=express()

// 使用中间件
app.use(bodyParser.urlencoded({extended:false}))
// 针对post方式处理字符串
// app.use(bodyParser.json())
// 针对post方式处理json

// app.get("/",(req,res)=>{
//     res.send("首页")
// })
// app.get("/list",(req,res)=>{
//     console.log(req.query)
//     res.send("列表接收传输过来的 usernam为"+req.query.username)
// })
// app.post("/dopost",(req,res)=>{
//     console.log(req.query)
//     res.send("dopost")
// })
app.post("/dopost",(req,res)=>{
    console.log(req.body.username)
    res.send("dopost："+req.body.username)
})
app.listen(3000)
