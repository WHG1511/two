// ==============================================
// ==============================================
// ==============================================
// 模块引擎
// ejs   art-tmplate jade =>pug swig



// ==============================================
// ==============================================
// ejs 模块引擎
// 定义： 嵌入javasc的模板引擎



// 下载流程
// npm init-y  格式化npm
// npm install ejs --save  安装ejs模块

// render 渲染 comoile 编译 template 模板
// ejs.render(template,data)  template 模板  data  数据(必须是一个对象)
// index.ejs

// <% %>  编译
// <%= %>  输出
// <%# %>  注释
// <%_ %>  去除首位空格
// <% _%>  去除末尾空格
// include 包含


// ==============================================
// ==============================================
// art-tmplate   模块引擎
// 定义:JavaScript的轻量型模块引擎


// 特点：语法简单  易上手
// 语法：
// 原始语法:
// <%%>
// 标准语法：
// {{}}



// 下载： npm install art-template --save
// list.art

// ==============================================
// ==============================================
// queryString 查询字符串

// parse  反序列化  转对象
// stringify  序列化  转字符串
// escape  转码
// unescape   解码



// ==============================================
// ==============================================
// ==============================================
// ==============================================
// express  koa
// 定义:基于node平台  快速 极简的开发框架
// npm install express --save

// express:
// 1.路由路径不区分大小写
// 2.获取动态路由参数  params=》 get
// 3.use  使用
// 4.get   请求方式
// 5.post   请求方式
// 6.express  支持链式调用



// node里面的全局对象
// __dirname  相对路径
// __filename  绝对路径
// settimeout
// setinterval
// module


// ==============================================
/**
 * 中间件：路由中间 第三方中间件
 * body-parser  处理post请求
 * 下载：  npm install body-parser --save
 * 
 * 使用中间件
 * app.use(bodyParser.urlencoded({extended:false}))
 * 针对post方式处理字符串
 * app.use(bodyParser.json())
 * 针对post方式处理json
 * 
 */


/***
 * 获取请求很中的参数
 * nodejs的 express框架 提供了四种方法来实现
 * 1,req.body    获取post请求的数据  （解析body不是nodejs默认提供的，你需要载入body-parser中间件才可以使用req.body）
 * 2,req.query   此方法多适用于GET请求，解析GET里的参数  （有nodejs默认提供，无需载入中间件）
 * 3,req.params  多适用于restful风格url中的参数的解析  （nodejs默认提供，无需载入其他中间件）
 * 4,req.param()  已弃用
 */



/***
 * exprss-art-template(express)
 * 
 * 
 */

// ==============================================
// ==============================================
/**
 * 静态资源  static
 * express.static
 * 
 * 模板引擎  ejs
 * art-template(node)===>exprss-art-template(express)
 * 
 * 
 * 
 * 
 * 前后端分离
 * 页面自己写
 * 
 * 接口=》
 * 登录  username  password  code
 * 
 * 
 * ajax调接口
 * $.ajax({
 *     "url": "http://127.0.0.1/login",
 *     "type": "post",
 *     "dataType": "json",
 *     "data": {
 *          username:$(".user").val()
 *          password:$(".pass").val()
 *          code:$(".code").val()
 *          },
 *     "async": true,
 *      "timeout":2000
 *   })
 * 
 */


 












