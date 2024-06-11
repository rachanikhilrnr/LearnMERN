const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    username:{type:String,required:true},
    start:{type:String,required:true},
    end:{type:String,required:true},
    from:{type:String,required:true},
    to:{type:String,required:true},
    cost:{type:String,required:true},
    percnt:{type:String,required:true},
    desc:{type:String,required:true}
},{timestamps:true})

const postModel = mongoose.model('post',postSchema);

module.exports = postModel;
