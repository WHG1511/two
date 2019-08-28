//接口编写文件   indexrouter负责首页端口的编写
var express=require("express")
var router=express.Router()
// console.log(router)
router.get("/login",(req,res)=>{
    res.send({"success":"ok","data":[{"username":"reg","age":"14"},{"username":"jhs","age":"18"}]})
})
module.exports=router