//引入express模板
const express=require("express");
//引入pool.js连接池
const pool=require("../pool")
//创建路由
var router=express.Router();
//使用get方法
router.post("/login",(req,res)=>{
 var $uname=req.body.uname;
 var $upwd=req.body.upwd;          
pool.query("SELECT * FROM  jd_user WHERE uname=? and upwd=?",[$uname,$upwd],(err,result)=>{
    if(err) throw err;
     if(result.length>0){
       res.send(result)
       console.log(result.length)
     }else{
       res.send("0");
     }
   })
 })
module.exports=router;
