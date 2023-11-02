const newsDb = require("../models/news.model");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.createNews = catchAsyncErrors(async (req, res, next) => {
  const {title, description,imageLink,tags,refferedLink,category} = req.body;
  const news = await newsDb.create({
    title,
    description,
    imageLink,
    tags,
    refferedLink,
    category
  });
  res.status(201).json({
    success: true,
    message: "News created successfully",
    news,
  });
});

exports.updateNews = catchAsyncErrors(async (req, res, next) => {
  const news = await newsDb.findByIdAndUpdate(req.body.id, req.body);
  res.status(200).json({
    success: true,
    message: "News updated successfully",
    news,
  });
});

exports.deleteNews = catchAsyncErrors(async (req, res, next) => {
  const news = await newsDb.findByIdAndRemove(req.body.id);
  res.status(201).json({
    success: true,
    message: "News deleted successfully",
    news,
  });
});

exports.getNews = catchAsyncErrors(async (req, res, next) => {
  const news = await newsDb.find({}).sort({createdAt:-1});
  res.status(201).json({
    success: true,
    message: "News Delivered successfully",
    news,
  });
});

exports.getNewsId = catchAsyncErrors(async (req, res, next) => {
  console.log(req.params.id)
  const news = await newsDb.findById(req.params.id);
  res.status(201).json({
    success: true,
    message: "News Delivered successfully",
    news,
  });
});

