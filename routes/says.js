var express = require('express');
var router = express.Router();
var says = require('../database/model/says');

router.post('/add',(req,res) => {
    let {to,from,content,imgs,contentTxt,time} = req.body;
    says.create({to,from,content,imgs,contentTxt,time},(err,data) => {
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
})

router.get('/get',(req,res) => {
    let {id} = req.query;
    var params = {};
    if(id){
        params = {_id:id}
    }else{
        params = {}
    }
    says.find(params,(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                ret:false
            })
            return
        }
        res.json({
            data,
            code:200,
            ret:true
        })
    })
})

router.get('/openOne',(req,res) => {  //获取开启的项目的数据
    says.findOne({status:1},(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                ret:false
            })
            return
        }
        res.json({
            data,
            code:200,
            ret:true
        })
    })
})

router.post('/update',(req,res) => {
    let {to,from,imgs,content,id,contentTxt,time} = req.body;
    says.update({_id:id},{$set:{to,from,imgs,content,contentTxt,time}},(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                ret:false
            })
            return
        }
        if(!data.n){
            res.json({
                data:"无效的ID",
                code:400,
                ret:false
            })
            return
        }else{
            res.json({
                data:"success",
                code:200,
                ret:true
            })
        }
    })
})

router.post('/open',(req,res) => {  //开启项目
    let {id} = req.body;
    says.findOne({status:1},(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                ret:false
            })
            return
        }
        if(data != null) {
            res.json({
                data:"已有一个项目开启，请先关闭",
                code:400,
                ret:false
            })
            return
        }else{
            says.update({_id:id},{$set:{status:1}},(err,data) => {
                if(err) {
                    res.json({
                        data:err,
                        code:500,
                        ret:false
                    })
                    return
                }
                if(!data.n){
                    res.json({
                        data:"无效的ID",
                        code:400,
                        ret:false
                    })
                    return
                }else{
                    res.json({
                        data:"success",
                        code:200,
                        ret:true
                    })
                }
            })      
        }
    })
})

router.post('/close',(req,res) => {
    let {id} = req.body;
    says.update({_id:id},{$set:{status:0}},(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                ret:false
            })
            return
        }
        if(!data.n){
            res.json({
                data:"无效的ID",
                code:400,
                ret:false
            })
            return
        }else{
            res.json({
                data:"success",
                code:200,
                ret:true
            })
        }
    })      
})

router.post('/del',(req,res) => {
    let {id} = req.body;
    says.remove({_id:id},(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                ret:false
            })
            return
        }
        if(!data.n){
            res.json({
                data:"无效的ID",
                code:400,
                ret:false
            })
            return
        }else{
            res.json({
                data:"success",
                code:200,
                ret:true
            })
        }
    })      
})

module.exports = router;