//接口编写文件   负责新闻页接口的编写
var express=require("express")
var router=express.Router()
// console.log(router)

// router.get("/login",(req,res)=>{
//     res.send({"success":"ok","data":[{"username":"tom","age":"14"},{"username":"jack","age":"18"}]})
// })


/////get请求数据
router.get("/login",(req,res)=>{
    //数据库存放的内容
    var data ={
        username:"admin",
        password:"123"
    }
    //数据库返回的内容
    var result=[{"username":"admin","password":"123","phone":123132}]
    if(req.query.username==data.username&&req.query.password==data.password){

        res.send({"success":"ok","data":result})
    }else{
        res.send({"error":"用户名错误"})
    }
})


/////post请求数据
// router.post("/login",(req,res)=>{
//     //数据库存放的内容
//     var data ={
//         username:"admin",
//         password:"123"
//     }
//     //数据库返回的内容
//     var result=[{"username":"admin","password":"123","phone":123132}]
//     if(req.body.username==data.username&&req.body.password==data.password){

//         res.send({"success":"ok","data":result})
//     }else{
//         res.send({"error":"用户名错误"})
//     }
// })
module.exports=router