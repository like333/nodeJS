/**
 * Created by like on 2017/6/15.
 */
//var a = 500;
//global.a = 100;
//module对象
//console.log(module);

var a = 100;
exports.a = a;
console.log(exports === module.exports)
/*
* Module {
 id: '.',
 exports: {},
 parent: null,
 filename: 'E:\\nodeJS\\module\\5.js',
 loaded: false,
 children: [],
 paths:
 [ 'E:\\nodeJS\\module\\node_modules',
 'E:\\nodeJS\\node_modules',
 'E:\\node_modules' ] }

 * */