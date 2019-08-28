var express=require("express")
// console.log(express)
// express=createAppllication
var app=express()
// console.log(app)
// context  执行上下文
// app.use("/",(req,res)=>{
//     res.send("express")
// })
// app.get("/about",(req,res)=>{
//     res.send("about")
// })
// app.get("/second",(req,res)=>{
//     res.send("second")
// })
app.use("/about/:id",(req,res)=>{
    res.send(req.params)
})
app.listen(3000)