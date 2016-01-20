var Sequelize = require('sequelize');
var db_conf = require('../config/database');

var sequelize = new Sequelize(
    db_conf.database,   // 数据库名
    db_conf.username,   // 用户名
    db_conf.password,   // 用户密码
    {
        'dialect': db_conf.dialect,      // 数据库使用mysql
        'host': db_conf.host,            // 数据库服务器ip
        'port': db_conf.port,            // 数据库服务器端口
        'define': {
            'underscored': db_conf.underscored // 字段以下划线（_）来分割（默认是驼峰命名风格）
        }
    }
);

exports.table=function (moduleName){
    var module = require('./'+moduleName+'Module').module(sequelize,Sequelize);
    return module;
};


module.exports=exports;
