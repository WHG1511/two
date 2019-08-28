var http = require('http');
var fs = require('fs');
var server=http.createServer()
server.listen("3300","localhost")
server.on("request",function(req,res){
    if(req.url == '/') {
        fs.readFile('./lxwj/dzq.html',(err,info)=>{
           res.write(info);
           res.end();
        })
      } else if(req.url.startsWith('/static')) {
        fs.readFile(__dirname + req.url,(err,info) =>{
          res.write(info);
          res.end();
        })
      }
})