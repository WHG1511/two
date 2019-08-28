var express=require("express")
var db=require("./db")
var app=express()
var router=express.Router()
var bodyParser=require("body-parser")

// var static=require("express")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static("static"))
router.post("/reg",(req,res)=>{
    var regUser={
        username:req.body.username,
        password:req.body.password,
        createAt:new Date(),
        updataAt:new Date(),
        phone:req.body.phone,
        email:req.body.email,
        tokenId:1
    }
    db.add("userData",regUser,(err,result)=>{
        if(err){
            throw err
        }
        res.send({"success":"ok"})
    })
})
router.get("/login",(req,res)=>{
    var userData={
        username:req.query.username,
        password:req.query.password
    }
    db.find("userData",userData,(err,result)=>{
        // console.log(result)
        db.find("userData",userData,(err,result)=>{
            if(result==""){
                res.send({"err":"用户名不存在"})
            }else{
                res.send({"success":"登录成功"})
            }
        })
    })
})



app.use(router)
app.listen(3000)