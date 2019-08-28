var http = require('http');
var fs = require('fs');
var server=http.createServer()
server.listen("3300","localhost")

server.on("request",function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
    if(req.url=='/lxwj/red.html') {
        fs.readFile('./lxwj/red.html',(err,info)=>{
        //    res.write(info);
           res.end(info);
        })
      }else if(req.url=="/static/style.css"){
        res.writeHead(200,{"Content-type":"text/css"})
        fs.readFile("./static/style.css",function(err,data){
            res.end(data)
        })
      }else if(req.url=="/static/10.jpg"){
        fs.readFile("./static/10.jpg",function(err,data){
            res.end(data)
        })
      }
})