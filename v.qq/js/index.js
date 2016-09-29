/**
 * Created by sea on 2016/9/21.
 */
function byId(curEle) {
    return document.getElementById(curEle);
}
function byTagName(curEle, tag, index) {
    if (curEle && tag && (index || index == 0 )) {
        return curEle.getElementsByTagName(tag)[index];

    }
    if (curEle && tag && (index == undefined || index == false)) {
        var list = curEle.getElementsByTagName(tag);
        if (list.length == 1) {
            return list[0];
        }
        return list;
    }
    return document.getElementsByTagName(curEle);
}

//头部快捷选项开始
//var mouseouverTab = {
//    fn: function (Box, titleEle, targetEle) {
//        var title = byTagName(Box, titleEle);
//        var ary = [];
//        for (var i = 0; i < title.length; i++) {
//            if (title[i].parentNode == Box) {
//                ary[ary.length] = title[i];
//            }
//        }
//        if (ary.length == 1) {
//            mouseouverTab.setStyle(ary[0],targetEle)
//        }
//        //if (ary.length != 1) {
//        //    for(var y=0;y<ary.length;y++){
//        //        mouseouverTab.setStyle()
//        //    }
//        //
//        //}
//
//    },
//    setStyle: function (title, targetEle) {
//        var target = byTagName(title, targetEle);
//        title.onmouseover = function () {
//            target.style.display = "block";
//            this.onmouseout = function () {
//                target.style.display = "none";
//            }
//        }
//    }
//
//};
//~(function () {
//    var Box = byId("section_quick");
//    //console.log(Box)
//    mouseouverTab.fn(Box, "div", "div");
//})()


var oDiv11=byId("quick_login");
oDiv11.onmouseover=function(){
    var a=byTagName(this,"div");
    a.style.display="block";
    console.log(1)
    this.onmouseout=function(){
        a.style.display="none";
    }
}

//头部快捷选项结束

//导航开始
~(function () {
    var nav_area = byId("nav_area");
    var oUl = byTagName(nav_area, "ul");
    var oList = byTagName(oUl, "li");
    var navW = utils.getCss(nav_area, "width");
    var itemW = Math.round(navW / oList.length);
    for (var i = 0; i < oList.length; i++) {
        oList[i].index = i;
        oList[i].onmouseover = function () {
            var oArrow = byTagName(this, "i");
            var oDiv = byTagName(this, "div", 0);
            if (!oDiv) {
                return;
            }
            oDiv.style.display = "block";
            oArrow.style.display = "block";
            var left = 0;
            var right = 0;
            var thisW = utils.getCss(oDiv, "width");
            left = itemW * this.index;
            right = navW - itemW * this.index;
            if (this.index < oList.length / 2) {
                if (left < thisW) {
                    left = 0;
                }
                if (left > thisW) {
                    left = itemW * this.index;
                    oDiv.style.marginLeft = -(thisW / 2) + "px";
                }
                oDiv.style.left = left + "px";
            }
            if (this.index > oList.length / 2) {
                if (right < thisW) {
                    right = 0;
                }
                if (right > thisW) {
                    right = navW - itemW * this.index;
                    oDiv.style.marginRight = -(thisW / 2) + "px";
                }
                oDiv.style.right = right + "px";
            }
            this.onmouseout = function () {
                oDiv.style.display = "none";
                oArrow.style.display = "none";
            }
        }
    }
})();
//导航结束

//banner开始
var banner = {
    fn: function () {
        var temp = 0;
        var timer;
        var auto;
        var bannerBox = byId("banner_inner");
        var bannerListBox = byId("banner_list");
        var list = byTagName(bannerListBox, "li");
        var bannerContBox = byId("banner_content");
        var bglist = byTagName(bannerContBox, "a");
        var colorAry = ["#270e35", "#4d5814", "#281415", "#c8baaf", "#e5fac2", "#d7d8ea", "#a3c8e5", "#202e37", "#cdddec", "#191f59"];
        for (var i = 0; i < list.length; i++) {
            list[i].index = i;
            list[i].onmouseover = function () {
                window.clearInterval(timer);
                temp = this.index;
                banner.set(list, this.index, bglist, colorAry);
            };
            list[i].onmouseout = function () {
                timer = setInterval(auto, 3000);
            }
        }
        auto = function () {
            temp++;
            temp == list.length ? temp = 0 : null;
            banner.set(list, temp, bglist, colorAry);
        };
        timer = setInterval(auto, 3000);
    },
    set: function (list, i, bglist, colorAry) {
        for (var a = 0; a < list.length; a++) {
            bglist[a].className = "banner_content_list";
            list[a].style.background = "";
            list[a].getElementsByTagName("a")[0].style.color = "#000";
        }
        list[i].style.background = "#ff920b";
        list[i].getElementsByTagName("a")[0].style.color = "#fff";
        bglist[list[i].index].className += " opacity1";
        bglist[list[i].index].style.background = colorAry[list[i].index];
    }
};
banner.fn();
//banner结束
//鼠标移入扩展开始
var advertiseMeBox = byId("section_spread");
var advertise_Me = {
    fn: function (Box) {
        var oUl = byTagName(Box, "ul");
        var oLis = byTagName(oUl, "li");
        for (var i = 0; i < oLis.length; i++) {
            (function (i) {
                oLis[i].onmouseover = function () {
                    var imgs = byTagName(this, "img");
                    var total = advertise_Me.totalWidth(imgs);
                    this.style.width = total["totalWidth"] + "px";
                    advertise_Me.resetW(oLis, 0, i);
                    this.onmouseout = function () {
                        this.style.width = total[0] + "px";
                        advertise_Me.resetW(oLis, total[0], i)
                    };

                };
            })(i);
        }
    },
    totalWidth: function (list) {
        obj = null;
        var totalWidth = null;
        var itemWidth = null;
        var obj = {};
        for (var i = 0; i < list.length; i++) {
            obj[i] = list[i].width;
            totalWidth += list[i].width;
            obj["totalWidth"] = totalWidth;
        }
        return obj
    },
    resetW: function (ele, wid, i) {
        switch (i) {
            case 3:
                ele[0].style.width = wid + "px";
                break;
            case 4:
                ele[0].style.width = wid + "px";
                ele[1].style.width = wid + "px";
                break;
        }
    }
};
advertise_Me.fn(advertiseMeBox);
//鼠标移入扩展结束
(function () {
    var temp = 0;
    var tag = 1;
    var timer = null;
    var left = null;
    var top = null;
    var oUl = byId("content_list");
    var oLi = byTagName(oUl, "li");
    var oBdr = byId("list_border");
    left = oLi[0].offsetLeft;
    top = oLi[0].offsetTop;
    var oLiW = oLi[0].clientWidth;
    var oLiH = oLi[0].clientHeight;
    oBdr.style.left = left + 4 + "px";
    oBdr.style.top = (top + oLiH) - 135 + "px";
    for (var i = 0; i < oLi.length; i++) {
        oLi[i].index = i;
        oLi[i].onmouseover = function () {
            window.clearInterval(timer);
            temp = this.index;
            oBdr.style.left = this.offsetLeft + 4 + "px";
        };
        oLi[i].onmouseout = function () {
            timer = setInterval(autoLeft, 1800);
        }
    }
    timer = setInterval(autoLeft, 1800);
    function autoLeft() {
        temp += tag;
        if (temp <= 0) {
            tag = 1;
        }
        if (temp >= oLi.length - 1) {
            tag = -1;
        }
        oBdr.style.left = oLi[temp].offsetLeft + 4 + "px";
    }
})();



















