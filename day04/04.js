var querystring=require("querystring")
// 查询字符串
console.log(querystring)
// var obj=querystring.parse("http://127.0.0.1:3000/send?name=tom&&age==12")

// parse  反序列化  转对象
// var obj=querystring.stringify({"name":"tom","age":12})
// stringify  序列化  转字符串

// var obj=querystring.escape("name,tom")
// escape  转码
var obj=querystring.unescape("name%2Ctom")
// unescape   解码
console.log(obj)