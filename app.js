var path = require('path');             //路径模块
var app = require('koa')();             //koa核心模块

//加载session驱动
require('./config/session')(app);

//加载静态服务器目录 依赖注入 app和path模块
require('./config/static')(app,path);

// //加载csrf 验证的中间件
// require('./config/csrf')(app);

// 加载模板引擎
require('./config/template')(app,path);

//加载路由  依赖注入app
require('./routes')(app);

app.listen(3000);
