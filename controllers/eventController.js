const eventsDb = require("../models/events.model");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.createEvents = catchAsyncErrors(async (req, res, next) => {
  const {name, description,imageLink,tags,eventLink,location,timing ,category} = req.body;
  const events = await eventsDb.create({
    name,
    description,
    imageLink,
    tags,
    eventLink,
    category,
    timing,
    location
  });
  res.status(201).json({
    success: true,
    message: "events created successfully",
    events,
  });
});

exports.updateEvents = catchAsyncErrors(async (req, res, next) => {
  const events = await eventsDb.findByIdAndUpdate(req.body.id, req.body);
  res.status(200).json({
    success: true,
    message: "events updated successfully",
    events,
  });
});

exports.deleteEvents = catchAsyncErrors(async (req, res, next) => {
  const events = await eventsDb.findByIdAndRemove(req.body.id);
  res.status(201).json({
    success: true,
    message: "events deleted successfully",
    events,
  });
});

exports.getEvents = catchAsyncErrors(async (req, res, next) => {
  const events = await eventsDb.find({}).sort({createdAt:-1});
  console.log("hello")
  res.status(201).json({
    success: true,
    message: "events Delivered successfully",
    events,
  });
});

exports.getEventsId = catchAsyncErrors(async (req, res, next) => {
  console.log(req.params.id)
  const events = await eventsDb.findById(req.params.id);
  res.status(201).json({
    success: true,
    message: "events Delivered successfully",
    events,
  });
});

