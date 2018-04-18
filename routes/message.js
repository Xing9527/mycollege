var express = require('express');
var router = express.Router();
var message = require('../database/model/message');

router.post('/add',(req,res) => {
    let {author,msg} = req.body;
    let params = {};
    if(author == ""){
        params = {msg,author:"佚名"}
    }else{
        params = {msg,author}
    }
    message.create(params,(err,data) => {
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
    let {pn} = req.query;
    message.find({}).sort({'_id':-1}).skip((pn-1)*8).limit(8).exec((err,data) => {
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

router.post('/del',(req,res) => {
    let {id} = req.body;
    message.remove({_id:id},(err,data) => {
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