/**
 * Created by like on 2017/6/15.
 */
//fs
var fs = require('fs');
fs.open('1.txt','r',function(err,fd){
   // console.log(err);
    //console.log(fd);//当前打开文件的标识
    if(err){
        console.log('文件打开失败');
    }else{
        console.log('文件打开成功');
       // console.log(fd);
    }
});
fs.open('1.txt','r',function(err,fd){
    console.log(fd);
})

