/**
 * Created by sea on 2016/3/17.
 */
function getEle(ele) {
    return document.querySelector(ele);
}
var main = getEle("#main");
var winW = document.documentElement.clientWidth;
var winH = document.documentElement.clientHeight;
var desW = 945;
var desH = 868;
if (winW / winH <= desW / desH) {
    main.style.webkitTransform = "scale(" + winH / desH + ")";
} else {
    main.style.webkitTransform = "scale(" + winW / desW + ")";
}


var bottombg = getEle("#bottombg");
var topbg = getEle("#topbg");
var photo = getEle("#photo");
var text = getEle("#text1");
var oUl = document.getElementById("oul");
var oLis = oUl.getElementsByTagName("li");
var video = document.getElementById("video");

var num = 0;
var numb = 0;

function fnLoad() {
    var progress = getEle(".progress");
    var loading = getEle("#loading");
    var arr = ['bg.jpg', 'contbg.jpg', 'contbg1.jpg', 'topbg.jpg', 'bottom.png'];
    for (var i = 0; i < arr.length; i++) {
        var oImg = new Image();
        oImg.src = "img/" + arr[i];
        oImg.onload = function () {
            num++;
            progress.style.width = num / arr.length * 100 + "%";
            console.log(num, arr.length)
            if (num == arr.length && loading) {
                progress.style.width=100+"%";
                progress.addEventListener("webkitTransitionEnd", function () {
                    main.removeChild(loading);
                    loading = null;
                    video.play();
                    handoff()
                }, false)
            }
        }
    }


}
fnLoad();
function handoff() {
    window.setTimeout(function () {
        bottombg.style.webkitTransform = "translate(0,0px)";
        topbg.style.webkitTransform = "translate(0,0px)";
        window.setTimeout(function () {
            photo.style.webkitTransform = "translate(0,0px)";
        }, 1500)
        window.setTimeout(function () {
            oLis[numb].style.webkitTransform = "translate(0,0)";
        }, 1500)

    }, 1500)
}
function handdown() {
    var timer = window.setTimeout(function () {
        bottombg.style.webkitTransform = "translate(0,60px)";
        topbg.style.webkitTransform = "translate(0,-40px)";
        var timer1 = window.setTimeout(function () {
            photo.style.webkitTransform = "translate(-300px,0)";
        }, 200)
        var timer2 = window.setTimeout(function () {
            for (var i = 0; i < oLis.length; i++) {
                oLis[i].style.webkitTransform = "translate(120%,0)";
            }

        }, 200)

    }, 200)
}


var mian = getEle("#main");
mian.addEventListener("touchstart", start, false);
//intro.addEventListener("touchend",end,false);
mian.addEventListener("touchmove", move, false);

function start(e) {
    this.startX = e.changedTouches[0].pageY;
    numb++;
    if (numb >= oLis.length) {
        numb = 0;
    }

}


function move(e) {
    handdown(numb);
    this.flag = true;
    var moveTouch = e.changedTouches[0].pageY;
    var movePos = moveTouch - this.startX;
    handoff(numb)

}






