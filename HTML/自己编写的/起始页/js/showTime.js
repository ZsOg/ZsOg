setInterval("fun(showTime_1)", 1);
function fun(timeID) {
    var date = new Date();  //创建对象  
    var h = date.getHours();  //时
    var min = date.getMinutes()  //分
    if (h < 10) {
        h = "0" + h;
    }
    if (min < 10) {
        min = "0" + min;
    }
    document.getElementById(timeID.id).innerHTML = h + ":" + min;
    //document.write(h+":"+minute);  
}