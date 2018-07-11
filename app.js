var express=require('express');
var app=express();
var bodyParser = require('body-parser');
app.engine('html',require('express-art-template'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var router=require('./router.js');
//把路由挂载到app服务中
app.use(router);
// router(app);
// app.use('/node_modules/',express.static('./node_modules/'));
app.use('/public/',express.static('./public/'));
app.listen(3000,function(){
	console.log('server is running at 3000');
})


