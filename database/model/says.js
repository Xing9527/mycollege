var mongoose = require('mongoose');
var says = new mongoose.Schema({
    to:{
        type:String
    },
    from:{
        type:String
    },
    content:{
        type:String
    },
    contentTxt:{
        type:String
    },
    imgs:{
        type:Array
    },
    status:{
        type:Number,
        default:0
    },
    time:{
        type:String
    }
})

module.exports = mongoose.model("says",says);