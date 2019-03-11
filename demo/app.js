var express = require('express')
var app = express()
//设置跨域访问
app.all('*',function(req,res,next){
     res.header('Access-Control-Allow-Origin','*');
     res.header('Access-Control-Allow-Headers','X-Requested-With');
     res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
     res.header('X-Powered-By','3.2.1');
     res.header('Content-Type','application/json;charset=utf-8');
     next();
})
// 模拟数据
var question = [{
    data: 213,
    num: 4444,
    age: 12
},{
    data: 456,
    num: 678,
    age: 13
}]
// 接口配置
app.get('/test/123',function(req, res){
    res.status(200);
    res.json(question)
})
// 配置服务端口
var server = app.listen(3000, function(){
    console.log('run success')
})