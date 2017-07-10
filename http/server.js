/**
 * Created by like on 2017/6/16.
 */
var http = require('http');
var server = http.createServer();
server.on('error',function(err){
    console.log(err);
});
server.on('listening',function(){
    console.log('listening....')
});
server.on('request',function(req,res){
   // console.log(req);
   // console.log('有客户端请求了');
   // res.write('hello');
    res.setHeader('hello','like');
    res.writeHead(200,'success',{
        'content-type':"text/plain",
    });
    res.write('<h1>hello</h1>');
    res.end();
})
server.listen(8080,'localhost');
//console.log(server.address());