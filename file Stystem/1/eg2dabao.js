/**
 * Created by like on 2017/6/16.
 */
var fs = require('fs');
var filedir = './miaov/source';
fs.watch(filedir,function(ev,file){
    var arr =[];

    //console.log(ev+'/'+file);
    fs.readdir(filedir,function(err,filelist){
        filelist.forEach(function(f){

            var info = fs.statSync(filedir + '/' +f);

            if(info.mode == 33206){
                arr.push(filedir+ '/'+f);
            }
        });
      //  console.log(arr);
        var con = '';
        arr.forEach(function(file){
            var c = fs.readFileSync(file);
            con += c.toString()+'\n';
        });
        if(!fs.existsSync('./miaov/js')){
            fs.mkdirSync('./miaov/js');
        }
        fs.writeFileSync('./miaov/js/index.js',con);
    })
})