var express=require('express');
var app=express();
var fs=require('fs');
var bodyParser = require('body-parser');
app.engine('html',require('express-art-template'));
// 首页
app.get('/students/',function(req,res){
	fs.readFile('./db.json','utf8',function(err,data){
		if(err){
			return res.status(500).send('Server error')
		}
		res.render('index.html',{
			fruits:['苹果','橘子','橙子','香蕉'],
			students:JSON.parse(data).students
		});
	})
})
//增加数据
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/students/',function(req,res){
	
})
//编辑数据
app.get('/students/edit',function(req,res){
	var data=req.query;
})
//删除数据
app.get('/students/delete',function(req,res){
	var data=req.query;
})
// app.use('/node_modules/',express.static('./node_modules/'));
app.use('/public/',express.static('./public/'));
app.listen(3000,function(){
	console.log('server is running at 3000')
})