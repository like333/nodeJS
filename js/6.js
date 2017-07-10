/**
 * Created by like on 2017/6/15.
 */
setInterval(function () {
   var d = new Date();
   console.log(d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+'时间：'+d.getHours()+'：'+d.getMinutes()+':'+d.getSeconds());
},1000);