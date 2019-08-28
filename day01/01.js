var http=require("http")
var fs=require("fs")
http.createServer(function(req,res){
    // res.end("success")
    // res.end((1+2).toString())
    res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
    // res.end("我爱中国")
    if(req.url=="/"){
        res.end("首页")
    }else if(req.url=="/red"){
        fs.readFile("./lxwj/red.html",function(err,data){
            res.end(data)
        })
    }else if(req.url=="/green"){
        fs.readFile("./lxwj/green.html",function(err,data){
            res.end(data)
        })
    }
}).listen(3000,function(){
    console.log("listen挂起")
})




// var http=require("http")
// var fs=require("fs")
// http.createServer(function(req,res){
//     res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
//     if(req.url=="/"){
//         fs.readFile("./lxwj/red.html",function(err,data){
//             res.write(data)
//             res.end()
//         })
//     }else if(req.url.startsWith("/static")){
//         fs.readFile(__dirname+req.url,function(err,data){
//             console.log(12)
//             res.write(data)
//             res.end()
//         })
//     }
// }).listen(3000,function(){
//     console.log("listen挂起")
// })


