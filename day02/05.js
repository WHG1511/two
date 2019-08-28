var fs=require("fs")
var http=require("http")
http.createServer((req,res)=>{
//读取文件内容------------------------------------------------------
    // fs.readFile("./static/1.txt",(err,data)=>{
    //     // if(err){
    //     //     throw err
    //     // }
    //     res.end(data)
    // })

//空文件添加内容------------------------------------------------------
    // if(res.url=="/favicon.ico"){
    //     return
    // }
    // fs.writeFile("./static/2.txt","我是内容3",{flag:"a"},(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })

//添加内容------------------------------------------------------
    // fs.writeFile("./static/2.txt","我是内容",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })

//改名------------------------------------------------------


    // fs.rename("./static/1.txt","./static/a.txt",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })


//删除------------------------------------------------------
    // fs.unlink("./static/a.txt",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })
}).listen(3000)