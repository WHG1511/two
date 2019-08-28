var http = require('http');
var fs = require('fs');
var server=http.createServer()
server.listen("3300","localhost")

server.on("request",function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
    if(req.url == '/') {
        fs.readFile('./red.html',(err,info)=>{
        //    res.write(info);
           res.end(info);
        })
      } else if(req.url=="/red.css"){
        res.writeHead(200,{"Content-type":"text/css"})
        fs.readFile("./red.css",function(err,data){
            res.end(data)
        })
      }else if(req.url=="/10.jpg"){
        res.writeHead(200,{"Content-type":"image/jpg"})
        fs.readFile("./10.jpg",function(err,data){
            res.end(data)
        })
      }
})