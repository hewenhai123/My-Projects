/**
 * Created by sea on 2016/9/21.
 */
var utils = {};

//获取经过浏览器计算的样式
utils.getCss = function getCss(curEle, attr) {
    var val = reg = null;
    if ("getComputedStyle" in window) {
        val = window.getComputedStyle(curEle, null)[attr];
    } else {
        if (attr == "opacity") {
            val = curEle.currentStyle["filter"];
            reg = /^alpha\(opacity=(\d+(?:\.\d+)?)\)$/;
            val = reg.test(val) ? reg.exec(val)[1] / 100 : 1;
        }else{
            val=curEle.currentStyle[attr];
        }
    }
    reg=/^-?\d+(\.\d+)?(px|pt|em|rem)?$/;
   return reg.test(val)?parseFloat(val):val;

};

utils.offset=function(curEle){
var t=curEle.offsetTop,l=curEle.offsetLeft,p=curEle.offsetParent;
    while (p){
        if(navigator.userAgent.indexOf("MSIE 8.0")===-1){
            t+= p.clientTop;
            l+= p.clientLeft;

        }
        t+= p.offsetTop;
        l+= p.offsetLeft;
        p= p.offsetParent;
    }
    return {left:l,top:t}
};


utils.byClass=function(){

}