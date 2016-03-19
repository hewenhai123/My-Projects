/**
 * Created by sea on 2016/3/19.
 */
var oTab=document.getElementById("tab");
var oContainer = oTab.getElementsByTagName("div").item(0);
var oAs = oContainer.getElementsByTagName("a");
var oUl = document.getElementById("mediaUl");
var oLis = oUl.getElementsByTagName("li");
var oImgs=oUl.getElementsByTagName("img");
var obl=document.getElementById("btl");
var obr=document.getElementById("btr");
console.log(oImgs)
for (var i = 0; i <oLis.length; i++) {
    oLis[i].index=i;
//        oTab.className="bg"+(oLis[i]);

    oLis[i].onmouseover = function () {
        for(var i=0;i<oLis.length;i++){
            oImgs[i].className="";
            oAs[i].className="";
        }
        oImgs[this.index].className = "mouseoverbdr";
        oAs[this.index].className="show";
        oTab.className="bg"+(this.index);
    }
}
