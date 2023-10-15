const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId
const news = new mongoose.Schema({
    title:{
        type:String,
        minLenght: 3,
        required: true,
    },
    description:{
        type:String,
        minLenght: 3,
        required: true,
    },
    tags:{
        type:[
            {
                type:String,
            }
        ],
    },
    imageLink:{
        type:String,
        required: true,
    },
    author:{
        name:String,
        imgUrl:String,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    category:{
        type:ObjectId,
        ref:"category",
        // required:true,
    }
});

module.exports = mongoose.model("news", news);