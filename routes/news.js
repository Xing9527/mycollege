var express = require('express');
var router = express.Router();
var news = require('../database/model/news');

router.post('/add',(req,res) => {
    let {title,img,content,contentText,author,from} = req.body;
    news.create({title,img,content,contentText,author,from},(err,data) => {
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
    let {id,pn} = req.query;
    if(id) {
        news.findOne({_id:id},(err,data) => {
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
    }else if(pn){
        news.find({}).sort({updateTime:-1}).skip((pn-1)*5).limit(5).exec((err,data) => {
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
                msg:"success",
                ret:true
            })
        })
    }else{
        news.find({}).sort({createTime:-1}).limit(3).exec((err,data) => {
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
                msg:"success",
                ret:true
            })
        })
    }
})

router.post('/del',(req,res) => {
    let {id} = req.body;
    news.remove({_id:id},(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                ret:false
            })
            return
        }
        if(!data.n) {
            rea.json({
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

router.post('/update',(req,res) => {
    let {id,title,img,author,content,contentText,from} = req.body;
    news.update({_id:id},{$set:{title,img,author,content,contentText,from,updateTime:new Date()}},(err,data) => {
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

router.post('/addView',(req,res) => {
    let {id} = req.body;
    news.findOne({_id:id},(err,data1) => {
        data1.view += 1;
        news.update({_id:id},{$set:{view:data1.view}},(err,data) => {
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
})

module.exports = router;