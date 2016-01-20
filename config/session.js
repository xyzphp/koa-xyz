var session = require('koa-generic-session');       //引人session 驱动
var redisStore = require('koa-redis');              //加载redis

module.exports = function (app){
    var sessionStore = session({
        store: redisStore({
            host:  'test.xyz',    //host地址
            port:   32770            //端口号
        })
    });
    app.keys = ['keys', 'keykeys'];  //设置session的key

    app.use(sessionStore);

};
