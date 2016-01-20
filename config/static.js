var mount = require('koa-mount'); //koa挂载静态路径模块
var koastatic = require('koa-static'); //koa静态函数模块
module.exports=function(app,path){
    // 挂载静态目录
    var root=__dirname+'/../';     //设置目录路径
    var dirname = 'public';        //设置目录名
    app.use(mount('/'+dirname,koastatic(path.join(root,dirname))));
};
