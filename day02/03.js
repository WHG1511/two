var http=require("http")
var url=require("url")
// console.log(url)
// var obj=url.resolve("http://127.0.0.1:3000/a/c","/b")
// console.log(obj)
var obj=url.parse("http://127.0.0.1:3000/a/c")
// console.log(obj)
// var obj=url.format("http://127.0.0.1:3000/a/c?username=admin")
// console.log(obj)
// var obj=url.format({
//     protocol: null,
//     slashes: true,
//     auth: null,
//     host: "http://127.0.0.1:3000",
//     port: null,
//     hostname: null,
//     hash: null,
//     search: "?username=admin",
//     query: "username=admin",
//     pathname: "/a/c",
//     path: null,
//     href: null 
// })
console.log(obj)