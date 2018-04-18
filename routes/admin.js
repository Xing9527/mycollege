var express = require('express');
var router = express.Router();
var admin = require('../database/model/admin');
var md5 = require('blueimp-md5')

router.post('/login',(req,res) => {
    let {username,pwd} = req.body;
    username = username.trim();
    pwd = pwd.trim();
    admin.findOne({username},(err,data) => {
      console.log(data)
      if(data == null) { //说明没注册
        res.json({
          data:"用户未注册",
          code:400,
          msg:"用户未注册",
          ret:false
        }) 
        return
      }else if(md5(pwd) != data.pwd){
        res.json({
          data:"密码错误",
          code:400,
          msg:"密码错误",
          ret:false
        })
        return
      }else{ //可以登录
        req.session.admin = data;
        res.json({
          data:"登陆成功",
          code:200,
          msg:"success",
          ret:true
        })
      }
    }) 
})

router.post('/add',(req,res) => {
  let {username,pwd} = req.body;
  admin.findOne({username},(err,data) => {
    if(data != null) {
      res.json({
        data:"该用户已被注册",
        code:400,
        ret:false
      })
      return
    }else{
      admin.create({username,pwd:md5(pwd)},(err,data) => {
        if(err) {
          res.json({
            data:err,
            code:500,
            ret:false
          })
          return
        }
        res.json({
          data:"success",
          code:200,
          ret:true
        })
      })
    }
  })
})
  
router.get('/isLogin',(req,res) => {
    if(req.session.admin) {
        res.json({
        data:req.session.admin.username,
        code:200,
        msg:"用户已登录",
        ret:true
        })
        return
    }else{
        res.json({
        data:"用户未登录",
        code:400,
        msg:"用户未登录",
        ret:false
        })
    }
})

router.get('/getUsername',(req,res) => {
  if(req.session.admin) {
    res.json({
      data:res.json.admin.username,
      code:200,
      ret:true
    })
    return
  }else{
    res.json({
      data:"无用户登录！",
      code:400,
      ret:false
    })
  }
})
  
router.get('/logout',(req,res) => {
    if(req.session.admin){
        req.session.admin = null;
        res.json({
          data:"退出登录成功",
          code:200,
          msg:"退出登录成功",
          ret:true
        })
        return
    }else{
        res.json({
          data:"用户未登录",
          code:400,
          msg:"用户未登录",
          ret:false
        })
    }   
})

module.exports = router;