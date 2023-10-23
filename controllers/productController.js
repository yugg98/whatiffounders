const Product = require("../models/product.model");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const {title, description,productLink,imageLink,category} = req.body;
  const Product = await Product.create({
    title,
    description,
    productLink,
    imageLink,
    category
  });
  res.status(201).json({
    success: true,
    message: "Product created successfully",
    Product,
  });
});

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  const Product = await Product.findByIdAndUpdate(req.body.id, req.body);
  res.status(200).json({
    success: true,
    message: "Product updates successfully",
    Product,
  });
});

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const Product = await Product.findByIdAndRemove(req.body.id);
  res.status(201).json({
    success: true,
    message: "Product created successfully",
    Product,
  });
});

exports.getProduct = catchAsyncErrors(async (req, res) => {
  const Products = await Product.find({});
  await res.status(201).json({
    success: true,
    message: "Product created successfully",
    Products,
  });
});

exports.getProductId = catchAsyncErrors(async (req, res) => {
  const Products = await Product.findById(req.params.id);
  await res.status(201).json({
    success: true,
    message: "Product created successfully",
    Products,
  });
});