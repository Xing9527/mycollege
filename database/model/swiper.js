var mongoose = require('mongoose');
var swiper = new mongoose.Schema({
    img:{
        type:String
    },
    title:{
        type:String
    },
    path:{
        type:String
    },
    type:{
        type:Number
    },
    sort:{
        type:Number,
        default:0
    },
    from:{
        type:String
    }
})

module.exports = mongoose.model("swiper",swiper,"swiper")