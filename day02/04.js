 var http=require("http")
 var url=require("url")
 var fs=require("fs")
 http.createServer((req,res)=>{
    var obj=url.resolve("http://127.0.0.1","/src")
    var query=url.parse(obj,true)
    console.log(query)
     if(query.path=="/src"){
         fs.readFile("./red.html",(err,data)=>{
             res.end(data)
         })
     }
 }).listen(3000)