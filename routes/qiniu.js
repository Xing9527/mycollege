var express = require('express');
var router = express.Router();
var qiniuConfig = require('.././util/qiniuConfig');

router.get('/getToken',(req,res) => {
    res.json({
        data:qiniuConfig(),
        code:200,
        ret:true
    })
})

module.exports = router;