/**
 * Created by like on 2017/6/15.
 */
var fs = require('fs');
fs.open('1.txt','r+',function(err,fd){
    if(err){
        console.log('出错了');
    }else{
        var bf = new  Buffer('123');
        /*
        fs.write(fd,bf,1,2,6,function(){
            console.log(arguments);
        })*/
        fs.write(fd,'1234',1,'utf-8');
        fs.close(fd,function(){

        });
    }
})