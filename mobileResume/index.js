var main = document.querySelector("#main");
var oLis = document.querySelectorAll("#list>li");
var winW = document.documentElement.clientWidth;
var winH = document.documentElement.clientHeight;
var desW = 640;
var desH = 960;
var i = 0;
var main = getEle("#main");
var load = getEle("#loading");
var progressNumber=getEle(".progressNumber");
if (winW / winH < desW / desH) {
	main.style.webkitTransform = "scale(" + winH / desH + ")";
} else {
	main.style.webkitTransform = "scale(" + winW / desW + ")";
}

function getEle(ele) {
	return document.querySelector(ele);
}

function loading() {
	var num = 0;
	var progress = getEle(".progress");

	function loadImg() {
		var arr = ["1.png", "2.png", "3.png", "4.png", "date.png", "email.png", "home.png", "horizon.png", "jquery.jpg", "js.jpg", "name.png", "phone.png", "ps.png", "rocket.png", "school.png", "ufo.png"];
		for (var i = 0; i < arr.length; i++) {
			var oImg = new Image();
			oImg.src = "img/" + arr[i];
			oImg.onload = function() {
				num += 100 / arr.length;
				progress.style.width = num + "%";
				progressNumber.innerHTML = "<i>"+num+"%"+"</i>";
			}
		}
	};

	function removeLoad() {
		progress.addEventListener("webkitTransitionEnd", function() {
			if (num==100) {
				main.removeChild(load);
				playSong()
			}

		}, false)
	}
	loadImg();
	removeLoad();
}

function playSong() {
	var musicModle = getEle(".backgroundMusic");
	musicModle.style.display = "block";
	var btn = document.getElementById("musicBtn");
	var song = document.getElementById("song");

	song.play();
	song.volume = 0.05;
	btn.style.webkitAnimationPlayState = "running";
	btn.addEventListener("click", toggle, false)

	function toggle() {
		if (song.paused) {
			song.play();
			btn.style.webkitAnimationPlayState = "running";
		} else if (song.played) {
			song.pause();
			btn.style.webkitAnimationPlayState = "paused";
		}
	}

}

[].forEach.call(oLis, function() {
	var oLi = arguments[0];
	oLi.index = arguments[1];
	oLi.addEventListener("touchstart", start, false);
	oLi.addEventListener("touchmove", move, false);
	oLi.addEventListener("touchend", end, false);
	console.dir(oLi)
})

function start(e) {
	this.startX = e.changedTouches[0].pageY;
	console.log(this.index)
	console.dir(this)

}

function move(e) {
	this.flag = true;
	var moveTouch = e.changedTouches[0].pageY;
	var movePos = moveTouch - this.startX;
	var index = this.index;
	[].forEach.call(oLis, function() {
		arguments[0].className = "";
		if (arguments[1] != index) {
			arguments[0].style.display = "none"
		}

		arguments[0].firstElementChild.id = "";

	})
	if (movePos > 0) {
		this.prevSIndex = (index == 0 ? oLis.length - 1 : index - 1);
		var duration = -winH + movePos;
	} else if (movePos < 0) {
		this.prevSIndex = (index == oLis.length - 1 ? 0 : index + 1);
		var duration = winH + movePos;
	}

	this.style.display = "none";
	oLis[this.prevSIndex].style.webkitTransform = "translate(0," + duration + "px)";
	oLis[this.prevSIndex].className = 'zIndex';
	oLis[this.prevSIndex].style.display = "block";
	//  console.log(index)
	switch (index) {
		case 2:
			page04();
			break;

	}

}

function end(e) {
	if (this.flag) {
		oLis[this.prevSIndex].style.webkitTransform = "translate(0,0)";
		oLis[this.prevSIndex].style.webkitTransition = "0.5s ease-out";
		oLis[this.prevSIndex].addEventListener("webkitTransitionEnd", function(e) {
			if (e.target.tagName == "LI") {
				this.style.webkitTransition = "";
			}
			this.firstElementChild.id = "a" + (this.index + 1);
		}, false)
	}

}

function ran(count) {
	var ary = [];
	while (ary.length < 5) {
		var rand = Math.round(Math.random() * count);
		if (ary.indexOf(rand) === -1) {
			ary[ary.length] = rand;
		}
	}
	return ary;
}

function page04() {
	var appraise = document.querySelector(".appraise");
	var oList = appraise.querySelectorAll("li");
	var colorAry = ["#0dc918", "#b9144a", "#ecc50e", "#80f0e7", "#5a900c"];
	var pLeft = ["40%", "20%", "50%", "10%", "30%", "60%", "65%", "15%"];
	var pTop = ["20%", "25%", "15%", "5%", "10%", "30%", "12%", "28%"];

	var temp = ran(4);
	var temp2 = ran(8);
	for (var y = 0; y < oList.length; y++) {
		oList[y].style.color = colorAry[temp[y]];
		oList[y].style.top = pTop[temp2[y]];
		oList[y].style.left = pLeft[temp2[y]];
	}
	appraise.style.display = "block";

	console.log(i)

	if (i > 1) {
		return;

	}
	console.log(i)
	setInterval(function() {
		var temp = ran(4);
		var temp2 = ran(8);
		for (var i = 0; i < oList.length; i++) {
			oList[i].style.color = colorAry[temp[i]];
			oList[i].style.top = pTop[temp2[i]];
			oList[i].style.left = pLeft[temp2[i]];
		}
		appraise.style.display = "block";
	}, 3000);
	i++;
};

loading()