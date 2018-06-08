const mongoose = require('mongoose');  //引入依赖mongoose
mongoose.connect('mongodb://localhost/xing');  //连接数据库
var db = mongoose.connection;
//数据库连接失败
db.on('error', console.error.bind(console, 'connection error:'));
//数据库连接成功
db.once('open', function() {
    // we're connected!
    console.log("数据库连接成功")
});