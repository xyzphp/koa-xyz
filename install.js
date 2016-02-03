var db = require('./module/');
var fs = require('fs');

var readDir = fs.readdirSync('./module');
var table =[];
    readDir.forEach(function(value){
        value=value.replace(/.js$/,'');
        if (value!=='index') {
            // 返回给 table 对象
            table[value] = db.table(value);
            console.log('正在安装'+value+'表');
            table[value].sync({force: true});
        }
});
