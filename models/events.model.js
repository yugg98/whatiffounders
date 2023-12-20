const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId
const events = new mongoose.Schema({
    name:{
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
    eventLink:{
        type:String,
        required: true,
    },
    category:{
        type:ObjectId,
        ref:"category",
        required:true,
    },
    location:{
        type:String,
        required: true,
    },
    timing:{
        type:String,
        required: true,
    },
    isFeatured:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model("events", events);