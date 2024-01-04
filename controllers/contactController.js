const contact = require("../models/contact.model");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.contactus = catchAsyncErrors(async (req, res, next) => {
    const {name, email,message,phoneNumber} = req.body;
    const user = await contact.create({
      name,
      email,
      message,
      phoneNumber,
    });
    res.status(201).json({
      success: true,
      message: "We will contact you soon",
      user,
    });
  });

  exports.getcontact = catchAsyncErrors(async (req, res, next) => {
    const user = await contact.find({})
    res.status(201).json({
      success: true,
      message: "We will contact you soon",
      user,
    });
  });