var http=require("http")
var fs=require("fs")

http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
    //创建文件夹
    // fs.mkdir("./static/aa",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })


    //删除文件夹
    // fs.rmdir("./static/aa",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })

    //读取文件夹
    // fs.readdir("./static",(err,data)=>{
    //     res.end(data.toString())
    // })

    //判断是否为文件夹或者文件
    // fs.exists("./static/cc",(exists)=>{
    //     if(exists){
    //         console.log("存在文件夹")
    //     }else{
    //         fs.mkdir("./static/cc",(err)=>{
    //                 if(err){
    //                     throw err
    //                 }
    //                 res.end("创好了")
    //             })
    //     }
    // })

    fs.stat("./static/2.txt",(err,stats)=>{
        // console.log(stats.isFile())
        console.log(stats.isDirectory())
        res.end("success")
    })

}).listen(3000)


