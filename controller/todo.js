var parse = require('co-body');
var db = require('../module/');
var message = db.table('message') ;
// graceful
exports.index=function *(){

	var rows    = yield message.findAll();
	var count   = this.session.count||0;
	this.session.count  =  ++count;
	var name= this.session.name||'匿名用户';
	yield this.render('index',{tasks:rows,count:count,name:name});

};

exports.add =function *(){
	var post = yield parse(this);
    var add = yield message.create({'message':post.message});
    // console.log(add.get({'plain': true}));
	this.body={status:200,id:add.id};
};

exports.done=function *(){
	var id = Number(this.params.id);
    done = yield message.update({'done': 1},{'where':{'id':id}});
    this.body={status:200};
};

exports.del=function *(){
	var id = Number(this.params.id);
    del= yield message.destroy({'where':{'id':id}});
    if (del) {
        this.body={status:200};
    }else{
        this.body={status:300};
    }
};

exports.setname=function (){
	this.session.name=this.params.name;
	this.redirect('/');
};

exports.test=function *(){
	yield this.render('test');
};

exports.list=function *(){
	var rows    = yield message.findAll({'attributes': ['id', 'message']});

	this.body=rows;
};



module.exports=exports;
