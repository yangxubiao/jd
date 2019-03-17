#设置浏览器发送服务器的文件脚本为UTF8
SET NAMES UTF8;
#丢弃数据库如果存在
DROP DATABASE  IF EXISTS jd;
#创建数据库设置服务器保存到数据库的的数据脚本为UTF8
CREATE DATABASE jd CHARSET=UTF8;
#进入数据库
USE jd;
#创建数据表
CREATE TABLE jd_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(8),
  upwd  SMALLINT,
  email VARCHAR(22),
  gender BOOL
);
INSERT INTO jd_user VALUES
  (1,"dingding",123456,"964095482@qq.com",1),
  (2,"lilei",123456,"454630207@qq.com",2),
  (3,"hanmeimei",123456,"6723456@qq.com",1);
