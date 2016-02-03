exports.module=function (sequelize,Sequelize){

    var tablename = 'message';
    var moduleinfo = sequelize.define(
        tablename,
        {
            'message': {
                'type': Sequelize.TEXT,     // 字段类型
                'allowNull': false,         // 是否允许为NULL
                // 'unique': trume           // 字段是否UNIQUE
    			'defaultValue': ''          //默认值
            },
            'done': {
                'type': Sequelize.INTEGER,   // INTEGER,
                'allowNull': false,
    			'defaultValue': 0            //默认值
            },
            'is_del': {
                'type': Sequelize.INTEGER,
                'allowNull': true,
    			'defaultValue': 0            //默认值

            }
        },
        {
            // 自定义表名
            'freezeTableName': true,
            'tableName': tablename,
            // 是否需要增加createdAt、updatedAt、deletedAt字段
            'timestamps': true,
    		// 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
            'paranoid': true
        }
    );
    // 创建建表语句
    return moduleinfo;
};


module.exports=exports;
