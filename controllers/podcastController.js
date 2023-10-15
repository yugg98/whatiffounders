const Podcast = require("../models/podcastReccomendation.model");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.createPodcast = catchAsyncErrors(async (req, res, next) => {
  const {title, description,podcastLink,imageLink} = req.body;
  const podcast = await Podcast.create({
    title,
    description,
    podcastLink,
    imageLink,
  });
  res.status(201).json({
    success: true,
    message: "Podcast created successfully",
    podcast,
  });
});

exports.updatePodcast = catchAsyncErrors(async (req, res, next) => {
  const podcast = await Podcast.findByIdAndUpdate(req.body.id, {
    title,
    description,
    podcastLink,
    imageLink,
  });
  res.status(200).json({
    success: true,
    message: "Podcast updates successfully",
    podcast,
  });
});

exports.deletePodcast = catchAsyncErrors(async (req, res, next) => {
  const podcast = await Podcast.findByIdAndRemove(req.body.id);
  res.status(201).json({
    success: true,
    message: "Podcast created successfully",
    podcast,
  });
});

exports.getPodcast = catchAsyncErrors(async (req, res) => {
  const podcast = await Podcast.find();
  await res.status(201).json({
    success: true,
    message: "Podcast created successfully",
    podcast,
  });
});
