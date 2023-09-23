const productDb = require("../models/products.model");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    const {name, desc,image,link} = req.body;
    const product = await productDb.create({
      name,
      desc,
      image,
      link,
    });
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
});