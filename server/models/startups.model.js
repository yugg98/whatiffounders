const mongoose = require("mongoose");

const startups = new mongoose.Schema({
    startupName:{
        type:String,
        require:true
    },
    founder:{
        name:String,
        avatar:String,
        designation:String,
        linkedin:String,
        xLink:String,
        require:true
    },
    logo:{
       type:String
    },
    desc:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
});

module.exports = mongoose.model("startups", startups);