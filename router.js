var fs=require('fs');
var express=require('express');
var router=express.Router();
var Students=require('./student.js');
// 首页
router.get('/students/',function(req,res){
	// fs.readFile('./db.json','utf8',function(err,data){
	// 	if(err){
	// 		return res.status(500).send('Server error')
	// 	}
	// 	res.render('index.html',{
	// 		fruits:['苹果','橘子','橙子','香蕉'],
	// 		students:JSON.parse(data).students
	// 	});
	// })
	Students.find(null,function(err,data){
		if(err){
			return res.status(500).send('Server error...');
		}
		res.render('index.html',{
			fruits:['苹果','橘子','橙子','香蕉'],
			students:data
		});
	})
})
//增加数据页面
router.get('/students/new/',function(req,res){
	res.render('new.html')
})
router.post('/students/new/',function(req,res){
	console.log(req.body);
	Students.save(req.body,function(err,data){
		if(err){
			return err.status(500).send('Server is error...')
		}
		console.log(data);
		res.redirect('/students/')
	})
})
//编辑数据
router.get('/students/edit',function(req,res){
	Students.find(req.query,function(err,stu){
		if(err){
			return res.status(500).send('Server is error...');
		}
		res.render('edit.html',{user:stu})

	})
	
})
router.post('/students/edit',function(req,res){
	Students.updateById(req.body,function(err,data){
		if(err){
			console.log('err')
			return res.status(500).send('Server is error...')
		}
		console.log('保存完成')
		res.redirect('/students/')
		
	})
})
//删除数据
router.get('/students/delete',function(req,res){
	var data=req.query;
})
module.exports=router;
