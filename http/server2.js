/**
 * Created by like on 2017/6/16.
 */
var http = require('http');
var server = http.createServer();
var url = require('url');
server.on('request',function(req,res){
  //  console.log(req.url);
    var urlStr = url.parse(req.url);
    //console.log(urlStr);
    switch(urlStr.pathname){
        case '/index':
            res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
            res.end('<h1>这是首页</h1>');
            break;
        case '/user':
            res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
            res.end('<h1>这是用户首页</h1>');
            break;
        default:
            res.writeHead(404,{'content-type':'text/html;charset=utf-8'});
            res.end('<h1>页面被吃掉了</h1>');
            break;
    }
});
server.listen(8080,'localhost');


//var u= url.parse('http://www.baidu.con:8080/a/index.html?b=2&a=2#p=1');
//console.log(u);