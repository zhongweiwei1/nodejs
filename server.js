let express = require("express");
let app = express();
// 引用路由中间件
let index = require("./routes/index");
let user = require("./routes/user");
let article = require("./routes/article");
app.use("/",index);
// 当客户端请求过来的路径是/user开头的话，会交给user中间件来处理
app.use("/user",user);
app.use("article", article);
app.listen(8088);
// let server = require("http").createServer(app);
// server.listen(8088)