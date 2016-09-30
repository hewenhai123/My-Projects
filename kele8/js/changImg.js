// JavaScript Document
$(function animationcont(){
$(function(){
	var sw = 0;
	var length1 = $("#demo_ul li").length > 10?10:$("#demo_ul li").length;
	var a = "";
	for(var m=1;m<=length1;m++)
	{
		a = "<a class=cur>"+m+"</a>"
		$(".demo .num").append(a);
	}
	$(".demo .num a").mouseover(function(){
		sw = $(".num a").index(this);
		myShow(sw);
	});
	function myShow(i){
		$(".demo .num a").eq(i).addClass("cur").siblings("a").removeClass("cur");
		$(".demo ul li").eq(i).stop(true,true).fadeIn(600).siblings("li").fadeOut(600);
	}
	//滑入停止动画，滑出开始动画
	$(".demo").hover(function(){
		if(myTime){
		   clearInterval(myTime);
		}
	},function(){
		myTime = setInterval(function(){
		  myShow(sw)
		  sw++;
		  if(sw==length1){sw=0;}
		} , 2000);
	});
	//自动开始
	var myTime = setInterval(function(){
	   myShow(sw)
	   sw++;
	   if(sw==length1){sw=0;}
	} , 2000);
})





$(function(){
	var sw = 0;
	var length1 = $("#demo_pc_ul li").length > 10?10:$("#demo_pc_ul li").length;
	var a = "";
	for(var m=1;m<=length1;m++)
	{
		a = "<a class=cur>"+m+"</a>"
		$(".demo_pc .num_pc").append(a);
	}
	$(".demo_pc .num_pc a").mouseover(function(){
		sw = $(".num_pc a").index(this);
		myShow(sw);
	});
	function myShow(i){
		$(".demo_pc .num_pc a").eq(i).addClass("cur").siblings("a").removeClass("cur");
		$(".demo_pc ul li").eq(i).stop(true,true).fadeIn(600).siblings("li").fadeOut(600);
	}
	//滑入停止动画，滑出开始动画
	$(".demo_pc").hover(function(){
		if(myTime){
		   clearInterval(myTime);
		}
	},function(){
		myTime = setInterval(function(){
		  myShow(sw)
		  sw++;
		  if(sw==length1){sw=0;}
		} , 2000);
	});
	//自动开始
	var myTime = setInterval(function(){
	   myShow(sw)
	   sw++;
	   if(sw==length1){sw=0;}
	} , 2000);
})
})

function changeImg(demo, num){
	var sw = 0;
	var length = $("#"+demo+"_ul li").length > 10?10:$("#"+demo+"_ul li").length;
	var a = "";
	for(var m=1;m<=length;m++)
	{
		a = "<a class=cur>"+m+"</a>"
		$("#"+demo+" ."+num).append(a);
	}
	$("#"+demo+" ."+num+" a").mouseover(function(){
		sw = $("."+num+" a").index(this);
		myShow(sw);
	});
	function myShow(i){
		$("#"+demo+" ."+num+" a").eq(i).addClass("cur").siblings("a").removeClass("cur");
		$("#"+demo+" ul li").eq(i).stop(true,true).fadeIn(600).siblings("li").fadeOut(600);
	}
	//滑入停止动画，滑出开始动画
	$("#"+demo).hover(function(){
		if(myTime){
		   clearInterval(myTime);
		}
	},function(){
		myTime = setInterval(function(){
		  myShow(sw)
		  sw++;
		  if(sw==length){sw=0;}
		} , 2000);
	});
	//自动开始
	var myTime = setInterval(function(){
	   myShow(sw)
	   sw++;
	   if(sw==length){sw=0;}
	} , 2000);

}


