/*
wind.chen 

Kele8_V3
wind_chen_nt@gmail.com 
*/
   
     function pcgameTab(name,pcgame,t){
 for(i=1;i<=t;i++){
  var pcgameLi=document.getElementById(name+i);
  var pcgameDiv=document.getElementById("setcont5_"+name+"_"+i);
  if(pcgameLi!=null)
  	pcgameLi.className=(i==pcgame?"on_5":"");
    pcgameDiv.style.display=(i==pcgame?"block":"none");
 }} 

 
      function pctopicTab(name,pctopic,s){
 for(i=1;i<=s;i++){
  var pctopicLi=document.getElementById(name+i);
  var pctopicDiv=document.getElementById("setcont6_"+name+"_"+i);
  if(pctopicLi!=null)
  	pctopicLi.className=(i==pctopic?"on_6":"");
    pctopicDiv.style.display=(i==pctopic?"block":"none");
 }} 
 
 
 
 
 