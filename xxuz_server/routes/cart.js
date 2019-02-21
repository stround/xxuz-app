const express = require("express");
const router = express.Router();
const pool = require("../pool.js");

router.get("/addCart",(req,res)=>{
  var uname = req.query.uname;
  var pid = req.query.pid;
  var price = req.query.price;
  var count = req.query.count;
  console.log(uname)
  var sql=" INSERT INTO `xx_cart`(`id`, `uname`, `pid`, `price`, `count`) VALUES (null,?,?,?,?)";
  pool.query(sql,[uname,pid,price,count],(err,result)=>{
      if(err)throw err;
      if(result.affectedRows > 0){
        res.send({code:1,msg:"添加成功"});
      }else{
        res.send({code:-1,msg:"添加失败"});
      }
  })
  //3:json {code:1,msg:"添加成功"}
});

router.get("/getCartList",(req,res)=>{
  //1:参数
  var uname = req.query.uname;
  //2:sql
  console.log(uname)
  var sql =" SELECT p.title, p.spec, p.pic, c.count, c.price, c.id FROM xx_product p,xx_cart c WHERE p.lid = c.pid AND c.uname = ?";
  pool.query(sql,[uname],(err,result)=>{
      if(err)throw err;
      res.send(result);
  }) 
})



module.exports=router;