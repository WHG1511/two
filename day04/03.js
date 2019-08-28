var http=require("http")
var art=require("art-template")
var fs=require("fs")
http.createServer((req,res)=>{
    var list=["首页","新闻","关于"]
    fs.readFile("./views/list.art",(err,data)=>{
        var template=data.toString()
        // console.log(template)
        var str=art.render(template,{list:list})
        res.end(str)
    })
}).listen(3000,function(){
    console.log("挂起")
})