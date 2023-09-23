const mongoose = require("mongoose");

const startups = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
       type:String,
    },
});

module.exports = mongoose.model("startups", startups);