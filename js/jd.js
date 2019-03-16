
//王俊凯全民时代动态图
(function(){
var wjk=document.querySelector(" .mod_container  #carousel #WJK img");
var  w=document.querySelector(" .mod_container  #carousel  div.WJK-item img");
wjk.onmouseenter=function(){
	   w.style="display:block";
}
var wjktype=document.querySelector(".mod_container  #carousel");
 wjktype.onmouseleave=function(){
          w.style="display:none";
 }
})();
