//引入模板
const express=require("express");
const bodyParser=require("body-parser");
const userRouter=require("./routes/user")
//创建服务器
var server=express();
//监听端口
server.listen(3000);
//插入中间件解析浏览器的post发来的url
server.use(bodyParser.urlencoded({
    extended:false
}));
//中间件 静态页面托管
server.use(express.static("../public"))
// 中间件 为路由添加别名
server.use("/user",userRouter);