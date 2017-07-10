/**
 * Created by like on 2017/6/15.
 */
var fs = require('fs');
fs.open('1.txt','r',function(err,fd){
    if(err){
        console.log('出错了');
    }else{
        var bf = new Buffer(5);
        console.log(bf);
        fs.read(fd,bf,2,3,1,function(err,len,newBuffer){
            console.log(bf);
            console.log(len);
            console.log(newBuffer);
        })
    }
})