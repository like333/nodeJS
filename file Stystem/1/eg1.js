/**
 * Created by like on 2017/6/16.
 */
var pro = {
    'name':'miaov',
    'fileData':[
        {
            'name':'css',
            'type':'dir',
        },
        {
            'name':'js',
            'type':'dir',
        },{
            'name':'images',
            'type':'dir',
        },{
            'name':'index.html',
            'type':'file',
            'content':'<html>\n\t<head>\n\t\t<title>title</title>\n\t</head>\n\t<body>\n\t</body>\n</html>',
        }
    ],


};

var fs = require('fs');
if(pro.name){
    if(!fs.existsSync(pro.name)){
        fs.mkdirSync(pro.name);
    }
    var fileData = pro.fileData;
    if(fileData && fileData.forEach){
        fileData.forEach(function(f){
            f.path = pro.name+'/' + f.name;
            console.log(f.path);
            f.content = f.content || '';
            switch(f.type){
                case 'dir':
                    if(!fs.existsSync(f.path)){
                        fs.mkdirSync(f.path);
                    }
                    break;
                case 'file':
                    fs.writeFileSync(f.path,f.content);
                    break;
                default:
                    break;
            }
        })
    }
}
