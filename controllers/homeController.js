const newsDb = require("../models/news.model");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const eventsDb = require("../models/events.model");

exports.getHome = catchAsyncErrors(async (req, res, next) => {
    const news = await newsDb.find({}).sort({createdAt:-1}).limit(8);
    const events = await eventsDb.find({}).sort({createdAt:-1}).limit(8);
    res.status(200).json({
        success: true,
        message: "Delivered Successfully",
        news,
        events
      });
})