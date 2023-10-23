const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId


const podcastReccomendation = new mongoose.Schema({
    title: {
        type:String,
        minLenght: 3,
        required: true,
    },
    description : {
        type:"String",
        minLenght: 10,
        required: true,
    },
    podcastLink : {
        type:"String",
        required: true,
    },
    imageLink : {
        type:"String",
        required: true,
    },
    category:{
        type:ObjectId,
        ref:"category",
        required:true,
    },
    createdAt : {
        type:"Date",
        default:  Date.now(),
    },
});

module.exports = mongoose.model("PodcastReccomendation", podcastReccomendation);