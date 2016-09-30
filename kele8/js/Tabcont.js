/*
wind.chen 

Kele8_V3
wind_chen_nt@gmail.com 
*/
 
 function newsTab(name,topnews,z){
 for(i=1;i<=z;i++){
  var newsLi=document.getElementById(name+i);
  var newsDiv=document.getElementById("setcont1_"+name+"_"+i);
  if(newsLi!=null)
  	newsLi.className=(i==topnews?"on":"");
    newsDiv.style.display=(i==topnews?"block":"none");
 }} 
 
 
  function newsgameTab(name,gamenews,y){
 for(i=1;i<=y;i++){
  var newsgameLi=document.getElementById(name+i);
  var newsgameDiv=document.getElementById("setcont2_"+name+"_"+i);
  if(newsgameLi!=null)
  	newsgameLi.className=(i==gamenews?"on_2":"");
    newsgameDiv.style.display=(i==gamenews?"block":"none");
 }} 
 
 
   function weiboTab(name,newsweibo,x){
 for(i=1;i<=x;i++){
  var weiboLi=document.getElementById(name+i);
  var weiboDiv=document.getElementById("setcont3_"+name+"_"+i);
  if(weiboLi!=null)
  	weiboLi.className=(i==newsweibo?"on_3":"");
    weiboDiv.style.display=(i==newsweibo?"block":"none");
 }} 
 
 
    function cardTab(name,Webgamecard,w){
 for(i=1;i<=w;i++){
  var cardLi=document.getElementById(name+i);
  var cardDiv=document.getElementById("setcont4_"+name+"_"+i);
  if(cardLi!=null)
  	cardLi.className=(i==Webgamecard?"on_4":"");
    cardDiv.style.display=(i==Webgamecard?"block":"none");
 }} 
 
 
 function ranking(name,rancont,v){
 for(i=1;i<=v;i++){
  var ranh=document.getElementById(name+i);
  var ranDiv=document.getElementById("list1_"+name+"_"+i);
  if(ranh!=null)
  	ranh.className=(i==rancont?"onhover":"");
    ranDiv.style.display=(i==rancont?"block":"none");
 }}
  
 
 function ranking2(name,ran_cont,u){
 for(i=1;i<=u;i++){
  var ranh=document.getElementById(name+i);
  var ranDiv=document.getElementById("list2_"+name+"_"+i);
  if(ranh!=null)
  	ranh.className=(i==ran_cont?"onhover2":"");
    ranDiv.style.display=(i==ran_cont?"block":"none");
 }}

 
     function pcgameTab(name,pcgame,t){
 for(i=1;i<=w;i++){
  var pcgameLi=document.getElementById(name+i);
  var pcgameDiv=document.getElementById("setcont5_"+name+"_"+i);
  if(pcgameLi!=null)
  	pcgameLi.className=(i==pcgame?"on_5":"");
    pcgameDiv.style.display=(i==pcgame?"block":"none");
 }} 

 
 
 
 
 
 
 