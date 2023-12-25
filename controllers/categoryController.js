const categoryDb = require("../models/category.model");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.createCategory = catchAsyncErrors(async (req, res, next) => {
  const {title} = req.body;
  const category = await categoryDb.create({
    title,
  });
  res.status(201).json({
    success: true,
    message: "News created successfully",
    category,
  });
});

exports.updateCategory = catchAsyncErrors(async (req, res, next) => {
    const {title,id} = req.body;
    const category = await categoryDb.findByIdAndUpdate(id,{
      title,
    });
    res.status(201).json({
      success: true,
      message: "News updated successfully",
      category,
    });
  });

  exports.deleteCategory = catchAsyncErrors(async (req, res, next) => {
    const {id} = req.body;
    const category = await categoryDb.findByIdAndDelete(id)
    res.status(201).json({
      success: true,
      message: "News deleted successfully",
      category,
    });
  });
  exports.getCategory = catchAsyncErrors(async (req, res, next) => {
    const category = await categoryDb.find({})
    res.status(201).json({
      success: true,
      category,
    });
  });