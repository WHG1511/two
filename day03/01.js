var http=require("http")
// 封装了一个http服务器和一个建议的http客户端
var fd=require("formidable")
// 用来操作form表单的模块
var path=require("path")
// path 提供一些工具函数，主要处理文件和目录
var sd=require("silly-datetime")
// 用来获取时间的模块
var fs=require("fs")
// 文件系统  用来操作文件的
console.log(fs)
http.createServer((req,res)=>{
    if(req.url="/send" && req.method=="POST"){
        var form=new fd.IncomingForm()
        form.uploadDir="./uploads"
        // form uploadDir 上传目录
        // fields  文本域   files 文件域
        form.parse(req,function(err,fields,files){
            // var username=fields.username
            // res.end(username)
            // console.log(files)
            var oldpath=files.pic.path
            var extname=path.extname(files.pic.name)
            // path 提供一些工具函数，主要处理文件和目录
            // extname 获取后缀名
            var tt=sd.format(new Date(),"YYYYMMDDHHmmss")
            // format 就是把对象转化为字符串  路径读取时dir和base
            var newpath="./uploads/"+tt+extname
            fs.rename(oldpath,newpath,(err)=>{
                if(err){
                    throw err
                }
                console.log("success")
            })
        })
    }
}).listen(3000)




// path:提供一些工具函数，主要处理文件和目录

// resolve: [Function: resolve],                       从右往左以此解析，直到返回一个完整的路径
// normalize: [Function: normalize],                  规范路径的输出
// isAbsolute: [Function: isAbsolute],                判断是否是绝对路径   （true false）
// join: [Function: join],                            拼接完整的路径
// relative: [Function: relative],
// toNamespacedPath: [Function: toNamespacedPath],
// dirname: [Function: dirname],                      返回当前文件所在的目录名称
// basename: [Function: basename],                    返回一个真实路径的最后一段
// extname: [Function: extname],                      获取后缀名
// format: [Function: format],                        就是把对象转化为字符串  路径读取时dir和base
// parse: [Function: parse],                          包括format的所有都输出，还增加了ext和name


// path 和  url的区别
// 都是路径，path操作的是文件路径  url操作的是网络路径