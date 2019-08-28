var http=require("http")
var ejs=require("ejs")
var fs=require("fs")
// console.log(ejs)
http.createServer((req,res)=>{
    // var datas={
    //     num:8
    // }
    // var string="我有一个iPhone<%= num %>s"
    // var template=string.toString()
    // var str=ejs.render(template,datas)
    // console.log(str)
    // res.end(str)
    var list=["首页","新闻","关于"]
    fs.readFile("./views/index.ejs",(err,data)=>{
        var template = data.toString()
        // console.log(template)
        var str =ejs.render(template,{list:list})
        res.end(str)
    })
}).listen(3000,function(){
    console.log("挂起")
})