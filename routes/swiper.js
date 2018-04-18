var express = require('express');
var router = express.Router();
var swiper = require('../database/model/swiper');

router.post('/add',(req,res) => {
    let {img,title,path,type,sort,from} = req.body;
    swiper.create({img,title,path,type,sort,from},(err,data) => {  
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
    let {id,type} = req.query;
    var params = {};
    if(id) {
        params = {_id:id}
    }else{
        params = {type}
    }
    swiper.find(params).sort({sort:1}).exec((err,data) => {
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
})

router.post('/update',(req,res) => {
    let {id,img,title,sort} = req.body;
    swiper.update({_id:id},{$set:{img,title,sort}},(err,data) => {
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
    swiper.remove({_id:id},(err,data) => {
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


module.exports = router;