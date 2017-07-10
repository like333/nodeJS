/**
 * Created by like on 2017/6/16.
 */
var fs = require('fs');
fs.watch('2.new.txt',function(ev,fn){
    console.log(ev);
    if(fn){
        console.log(fn+'发生了改变');
    }else{
        console.log('……');
    }
})