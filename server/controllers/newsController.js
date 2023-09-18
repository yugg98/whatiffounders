const newsDb = require("../models/news.model");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.createNews = catchAsyncErrors(async (req, res, next) => {
  const {title, description,podcastLink,imageLink,tags,refferedLink} = req.body;
  const news = await newsDb.create({
    title,
    description,
    podcastLink,
    imageLink,
    tags,
    refferedLink
  });
  res.status(201).json({
    success: true,
    message: "News created successfully",
    news,
  });
});

exports.updateNews = catchAsyncErrors(async (req, res, next) => {
  const news = await newsDb.findByIdAndUpdate(req.body.id, {
    title,
    description,
    podcastLink,
    imageLink,
  });
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
  const news = await newsDb.find({});
  console.log("hello")
  res.status(201).json({
    success: true,
    message: "News Delivered successfully",
    news,
  });
});
