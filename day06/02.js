var express=require("express")
var app=express()
var mongoClient=require("mongodb").MongoClient
// 添加
// console.log(mongoClient)
app.get("/add",(req,res)=>{
    mongoClient.connect("mongodb://127.0.0.1:27017",(err,db)=>{
        var dbName=db.db("adminuser")
        dbName.collection("test").insert({"username":"jack"},function(err){
            if(err){
                throw err
            }
           res.send("插入成功")
            db.close()
        })
    })
})


// 删除
// app.get("/del",(req,res)=>{
//     mongoClient.connect("mongodb://127.0.0.1:27017",(err,db)=>{
//         var dbName=db.db("adminuser")
//         dbName.collection("test").deleteOne({"username":"tom"},function(err){
//             if(err){
//                 throw err
//             }
//            res.send("删除成功")
//             db.close()
//         })
//     })
// })
app.listen(3000)

