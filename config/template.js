var render = require('koa-ejs');       //加载模板引擎


module.exports = function(app,path){

    var root    =  __dirname+'/../';     //设置目录路径
    var dirname =  'views';              //设置目录名
    render(app, {
      root: path.join(root, dirname),
      layout: false,
      viewExt: 'html',
      cache: false,
      debug: true
    });

};
