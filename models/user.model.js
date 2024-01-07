const mongoose = require("mongoose");
const crypto = require("crypto")
const userModel = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function(email) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: props => `${props.value} is not a valid email!`
    },
    unique:true
  },
  isVerified:Boolean,
  loginToken:String,
  loginTokenExpire:Date,
  tokenRequestCount:Number,
  lastTokenRequestDate:Date,
  loginType:{
    type:String,
    default:"email",
    enum:["google","email"]
  },
  createdAt: {
    type: Date,
    default: Date.now,
    validate: {
      validator: function(date) {
        return date instanceof Date;
      },
      message: props => `${props.value} is not a valid date!`
    }
  },
});


userModel.methods.getLoginToken = function () {
    // Generating Token
    const loginToken = crypto.randomBytes(20).toString("hex");
  
    // Hashing and adding resetPasswordToken to userSchema
    this.loginToken = crypto
      .createHash("sha256")
      .update(loginToken)
      .digest("hex");
  
    this.loginTokenExpire = Date.now() + 15 * 60 * 1000 * 2;
  
    return loginToken;
  };

module.exports = mongoose.model("Users", userModel);
