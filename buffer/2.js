/**
 * Created by like on 2017/6/15.
 */
var str = 'hello';
console.log(new Buffer(str));
var bf = new Buffer(5);
//bf.write(str);
//console.log(bf);
//bf.write(str,4);
bf.write(str,1,3);
console.log(bf);