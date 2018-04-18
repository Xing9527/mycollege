var mongoose = require('mongoose');
var message = new mongoose.Schema({
    author:{
        type:String
    },
    msg:{
        type:String
    },
    createTime:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("message",message,"message")