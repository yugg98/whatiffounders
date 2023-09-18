const mongoose = require("mongoose");

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
    imgUrl:{
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
    }
});

module.exports = mongoose.model("news", news);