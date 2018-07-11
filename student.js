/**
 * student.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务逻辑
 */
var dbPath="./db.json";
var fs=require('fs');
/**
 * 获取所有学生列表
 */
exports.find=function(id,callback){
	fs.readFile(dbPath,'utf8',function(err,data){
		if(err){
			return callback(err);
		}
		var students=JSON.parse(data).students;
		var queryId=id;
		if(queryId){
			var stu=students.find(
				function(item){
					return queryId.id==item.id

			})
			return callback(null,stu);
		}
		callback(null,students);
	})
}
/**
 * 添加保存学生
 */
exports.save=function(info,callback){
	
	fs.readFile(dbPath,'utf8',function(err,data){
		if(err){
			return callback(err);
		}
		var fileData=JSON.parse(data).students;
		info.id=fileData[fileData.length-1].id+1;
		fileData.push(info);
		//写入文件
		fs.writeFile(dbPath,JSON.stringify({"students":fileData}),function(err,writedata){
			if(err){
				return callback(err);
			}
			callback(null,'ok');
		})
	})
}
/**
 * 更新学生
 */
exports.updateById=function(student,callback){
	fs.readFile(dbPath,'utf8',function(err,data){
		if(err){
			return callback(err);
		}
		var students=JSON.parse(data).students;
		var stu=students.find(function(item){
			return item.id==student.id;
		})
		console.log(123)
		console.log(student)
		for(var key in student){
			stu[key]=student[key];
		}

		var fileData=JSON.stringify(students);
		console.log(students);
		fs.writeFile(dbPath,JSON.stringify({students:students}),function(err,data){
			if(err){
				return callback(err);
			}
			callback(null,'ok');
		})
	})
}
/**
 * 删除学生
 */
exports.delete=function(info,callback){
	fs.readFile(dbPath,'utf8',function(err,data){
		if(err){
			return callback(err);
		}
		var students=JSON.parse(data).students;
		
	})
}