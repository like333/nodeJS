/**
 * Created by like on 2017/6/15.
 */

var fs = require('fs');
/*
fs.open('1.txt','r',function(err,fd){
    console.log(fd);
})
console.log('hello');*/

var fd = fs.openSync('1.txt','r');
console.log(fd);