const Podcast = require("../models/podcastReccomendation.model");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.createPodcast = catchAsyncErrors(async (req, res, next) => {
  const {name, description,podcastLink,imageLink,category,isFeatured} = req.body;
  const podcast = await Podcast.create({
    title,
    description,
    podcastLink,
    imageLink,
    category,
    isFeatured,
  });
  res.status(201).json({
    success: true,
    message: "Podcast created successfully",
    podcast,
  });
});

exports.updatePodcast = catchAsyncErrors(async (req, res, next) => {
  const podcast = await Podcast.findByIdAndUpdate(req.body.id, req.body);
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
  const podcasts = await Podcast.find({});
  await res.status(201).json({
    success: true,
    message: "Podcast created successfully",
    podcasts,
  });
});

exports.getPodcastId = catchAsyncErrors(async (req, res) => {
  const podcasts = await Podcast.findById(req.params.id);
  await res.status(201).json({
    success: true,
    message: "Podcast created successfully",
    podcasts,
  });
});