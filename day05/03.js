var express=require("express")
var router=require("./router")
var bodyParser=require("body-parser")
var app=express()
// get 请求数据
app.use(express.static("static"))
// post 请求数据
// app.use(bodyParser.urlencoded({extended:false}))
app.use(router)
app.listen(3000)