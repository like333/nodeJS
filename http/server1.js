/**
 * Created by like on 2017/6/19.
 */
var http = require('http');

// http.createServer( function(require,response){
//     response.writeHead(200,{'content-type':'text-plain'});
//     response.end('hello world\n');
// } ).listen(8124);
/*
http.createServer(function(req,res){
    var body = [];

    res.writeHead(200,{'content-type':'text-plain'});
    res.end('hello world\n');
    console.log(req.method);
    console.log(req.headers);

    req.on('data',function(chunk){
        body.push(chunk);
    });

    req.on('end',function(){
        body = Buffer.concat(body);
        console.log(body.toString());
    });

}).listen(8080);*/

/*
//服务端原样将客户端请求的请求体数据返回给客户端
http.createServer(function(req,res){
    req.writeHead(200,{'content-type':'text/plain'});
    req.on('data',function(chunk){
        res.write(chunk);
    });
    req.on('end',function(){
        res.end();
    });
}).listen(8080);*/
/*
* 客户端模式下如何工作
* */
var options = {
    hostname:'www.example.con',
    port:8080,
    path:'/upload',
    method:'POST',
    header:{
        'content-type':'application/x-www.form-urlencoded'
    }
};
//创建一个客户端，并制订了请求目标和请求头数据
var req = http.request(options,function(res){});

req.write('hello world');
req.end();