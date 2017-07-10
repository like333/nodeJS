/**
 * Created by like on 2017/6/15.
 */

/*
var str = '你好';
console.log(str.length);
console.log(Buffer.byteLength(str));

var str1 = '你好';
var str2 = '世界';
var list = [new Buffer(str1),new Buffer(str2)];
var bf = Buffer.concat(list,6);
console.log(bf.toString());*/
process.stdout.write('请输入内容：');
process.stdin.on('data',function(chunk){
    //console.log(chunk.toString());
    console.log('hello'+chunk);
})