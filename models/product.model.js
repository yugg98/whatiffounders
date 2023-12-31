const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const products = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    min: [5, "Name must contain at least 5 letter"],
  },
  founder: {
    name: String,
    avatar: String,
    designation: String,
    linkedin: String,
    xLink: String,
    tagline: String,
  },
  imageLink: {
    type: String,
  },
  description: {
    type: String,
    require: true,
  },
  productLink: {
    type: String,
    require: true,
  },
  category: {
    type: ObjectId,
    ref: "category",
    required: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  isInTopList: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  logo:{
    type:String,
    required:true
  }
});

module.exports = mongoose.model("products", products);
