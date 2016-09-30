<!--//--><![CDATA[//><!--
//图片滚动列表 mengjia 070816
var Speed2 = 3; //速度(毫秒)
var Space2 = 5; //每次移动(px)
var PageWidth2 = 810; //翻页宽度
var fill2 = 0; //整体移位
var MoveLock2 = false;
var MoveTimeObj2;
var Comp2 = 0;
var AutoPlayObj2 = null;
GetObj("List4").innerHTML = GetObj("List3").innerHTML;
GetObj('ISL_Cont2').scrollLeft = fill2;
GetObj("ISL_Cont2").onmouseover = function(){clearInterval(AutoPlayObj2);}
GetObj("ISL_Cont2").onmouseout = function(){AutoPlay();}
AutoPlay();
function GetObj(objName){if(document.getElementById){return eval('document.getElementById("'+objName+'")')}else{return eval('document.all.'+objName)}}
function AutoPlay(){ //自动滚动
 clearInterval(AutoPlayObj2);
 AutoPlayObj2 = setInterval('ISL_GoDown();ISL_StopDown();',10000); //间隔时间
}
function ISL_GoUp2(){ //上翻开始
 if(MoveLock2) return;
 clearInterval(AutoPlayObj2);
 MoveLock2 = true;
 MoveTimeObj2 = setInterval('ISL_ScrUp();',Speed2);
}
function ISL_StopUp2(){ //上翻停止
 clearInterval(MoveTimeObj2);
 if(GetObj('ISL_Cont2').scrollLeft % PageWidth2 - fill2 != 0){
  Comp2 = fill2 - (GetObj('ISL_Cont2').scrollLeft % PageWidth2);
  CompScr();
 }else{
  MoveLock2 = false;
 }
 AutoPlay();
}
function ISL_ScrUp2(){ //上翻动作
 if(GetObj('ISL_Cont2').scrollLeft <= 0){GetObj('ISL_Cont2').scrollLeft = GetObj('ISL_Cont2').scrollLeft + GetObj('List3').offsetWidth}
 GetObj('ISL_Cont2').scrollLeft -= Space2 ;
}
function ISL_GoDown2(){ //下翻
 clearInterval(MoveTimeObj2);
 if(MoveLock2) return;
 clearInterval(AutoPlayObj2);
 MoveLock2 = true;
 ISL_ScrDown2();
 MoveTimeObj2 = setInterval('ISL_ScrDown()',Speed2);
}
function ISL_StopDown2(){ //下翻停止
 clearInterval(MoveTimeObj2);
 if(GetObj('ISL_Cont2').scrollLeft % PageWidth2 - fill2 != 0 ){
  Comp2 = PageWidth2 - GetObj('ISL_Cont2').scrollLeft % PageWidth2 + fill2;
  CompScr();
 }else{
  MoveLock2 = false;
 }
 AutoPlay();
}
function ISL_ScrDown2(){ //下翻动作
 if(GetObj('ISL_Cont2').scrollLeft >= GetObj('List3').scrollWidth){GetObj('ISL_Cont2').scrollLeft = GetObj('ISL_Cont2').scrollLeft - GetObj('List3').scrollWidth;}
 GetObj('ISL_Cont2').scrollLeft += Space2 ;
}
function CompScr(){
 var num;
 if(Comp2 == 0){MoveLock2 = false;return;}
 if(Comp2 < 0){ //上翻
  if(Comp2 < -Space2){
   Comp2 += Space2;
   num = Space2;
  }else{
   num = -Comp2;
   Comp2 = 0;
  }
  GetObj('ISL_Cont2').scrollLeft -= num;
  setTimeout('CompScr()',Speed2);
 }else{ //下翻
  if(Comp2 > Space2){
   Comp2 -= Space2;
   num = Space2;
  }else{
   num = Comp2;
   Comp2 = 0;
  }
  GetObj('ISL_Cont2').scrollLeft += num;
  setTimeout('CompScr()',Speed2);
 }
}
//--><!]]>




