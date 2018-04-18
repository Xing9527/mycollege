var mongoose = require('mongoose');
var news = new mongoose.Schema({
    title:{
        type:String
    },
    img:{
        type:String
    },
    content:{
        type:String
    },
    contentText:{
        type:String
    },
    author:{
        type:String,
        default:"未知"
    },
    createTime:{
        type:Date,
        default:Date.now()
    },
    updateTime:{
        type:Date,
        default:Date.now()
    },
    from:{
        type:String,
        default:"不详"
    },
    view:{
        type:Number,
        default:0
    }
})

module.exports = mongoose.model("news",news)