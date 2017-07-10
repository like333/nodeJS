/**
 * Created by like on 2017/6/16.
 */
var head = require('./head');
var body = require('./body');

exports.creat = function(name){
    return {
        name:name;
        head:head.creat();
        body:body.creat();
    };
};