var route=require('koa-router')();

// 加载控制器对象控制器对象
var  $ = require('./controller/');

route.get(['/','/index'],$('todo').index);

route.get(['/test'],$('todo').test);

route.get(['/tasks'],$('todo').list);

route.put('/tasks',$('todo').add);

route.post('/tasks/:id',$('todo').done);

route.delete('/tasks/:id',$('todo').del);

route.get('/name/:name',$('todo').setname);

// 加载路由
module.exports=function (app){
    app.use(route.routes());
};
