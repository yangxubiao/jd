// headerEvent 
//01.my_jd
(function(){
var $my_jd=$("#shortcut div.w ul.fr li:nth-child(6)>a");
var $li_my_jd=$("#shortcut div.w ul.fr li:nth-child(6)");
$my_jd.mouseenter(function(){
    var $my_jd=$(this);
    $("[dataEvent='my_jd']").show();
})
$li_my_jd.mouseleave(function(){
    var $li_my_jd=$(this);
    $("[dataEvent='my_jd']").hide();
})
})();
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
