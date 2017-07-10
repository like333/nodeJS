/**
 * Created by like on 2017/6/15.
 */
//console.log(process);

// console.log(process.argv);
/* setInterval(function(){
    console.log(process.title);
    console.log(process.pid);
   console.log( process.argv);
    // }
// ,1000);
setTimeout(function () {
    process.exit();
},4000)

function log(data) {
    process.stdout.write(data);
}
log('你好');

process.stdin.on('data',function (chunk) {
   console.log('用户输入了'+chunk);
})
process.stdin.resume();
*/

var a;
var b;
process.stdout.write('请输入a的值:');
process.stdin.on('data',function(chunk){
    if(!a){
        a = Number(chunk);
        process.stdout.write('请输入b的值:');
    }else{
        b = Number(chunk);
        process.stdout.write('a+b的结果是：'+ (a+b) );
    }

})
