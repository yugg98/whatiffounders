const mongoose = require("mongoose");

const contactusSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  // Corrected typo here
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
  phoneNumber: {
    type: String,
    required: true,
    minlength: 10,  
    maxlength: 13,
    unique:true
  },
  message: {
    type: String,
    minlength: 2,  // Example: Minimum length of 10 characters
    maxlength: 500, // Example: Maximum length of 500 characters
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

module.exports = mongoose.model("ContactUs", contactusSchema);
