var csrf = require('koa-csrf');
module.exports=function(app){
    csrf(app);
    app.use(csrf.middleware);
};
