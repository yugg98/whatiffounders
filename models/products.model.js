const mongoose = require("mongoose");
const products = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    min:[5,"Name must contain at least 5 letter"]
  },
  founders: {
    name: String,
    avatar: String,
    designation: String,
    linkedin: String,
    xLink: String,
    tagline: String,
  },
  image: {
    type: String,
  },
  desc: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
  
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("products", products);
