// Jquery login 点击登录
(function(){
    var  $login=$("[data-toggle=login]");
$login.click(function(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            var result=JSON.parse(xhr.responseText)[0];
             if(result!=undefined){
         location.href='http://127.0.0.1:3000/index.html?uid='+result.uid;
            }else{
                 alert("用户名或密码错误");
             }
        }
    }
    xhr.open("post","/user/login",true);
    var formdata="uname="+uname.value+"&upwd="+upwd.value;
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(formdata);
})
})();
//账号密码验证
var txtUname=document.getElementsByName("username")[0];
var txtUpwd=document.getElementsByName("userupwd")[0];
txtUname.onfocus=txtUpwd.onfocus=function(){
     var txt=this;
 
 var  p=txt.nextElementSibling;
 
 var n=p.removeAttribute("dataClass")

}
txtUname.onblur=function(){
  var reg=/^\w{4,8}$/;
  vali.call(this,reg);
}

txtUpwd.onblur=function(){
  var reg=/^\w{4,16}$/;
  vali.call(this,reg);
}
function vali(reg){
  var txt=this;
  var p=txt.nextElementSibling;
  if(reg.test(txt.value)==true){
    p.innerHTML="格式正确";
   }else{
    p.innerHTML="格式有误";
  }
}
