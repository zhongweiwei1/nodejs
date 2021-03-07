1）npm init -y 创建package.json文件
2）cnpm install xxx 安装依赖包 -D(--save-dev) -S(--save)
    body-parser 
    cookie-parser 
    debug 
    ejs 
    express 
    morgan 
    serve-favicon 
    express-session
    connect-mongo 
    mongoose 
    connect-flash 
    markdown 
    multer 
    async
3）创建并初始化git .gitignore
4）提交git
    git init
    git add -A
    git commit -m '初始化项目和依赖'
    git remote add origin "仓库地址"
    git push -u origin master
5)创建服务 expres+mongodb
    let express = require("express");
    let app = express();
    app.listen(8088);
6) 写路由
7) 提交代码
    git add -A
    git commit -m "跑通路由"
    git push origin master