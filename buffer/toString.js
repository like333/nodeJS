/**
 * Created by like on 2017/6/15.
 */
var bf = new Buffer('hello');
console.log(bf.toString());
console.log(bf.toString('utf-8',0));
/*
var bf = new Buffer('你好');
console.log(bf.toString());
console.log(bf.toString('utf-8',1));*/

console.log(bf.toJSON());