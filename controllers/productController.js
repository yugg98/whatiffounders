const productDb = require("../models/product.model");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const {name,foundername,founderavatar, description,productLink,imageLink,category,isFeatured,isInTopList} = req.body;
  const Product = await productDb.create({
    name,
    description,
    productLink,
    imageLink,
    category,
    isFeatured,
    isInTopList,
    founder:{
      name:foundername,
      avatar:founderavatar
    }
  });
  res.status(201).json({
    success: true,
    message: "Product created successfully",
    Product,
  });
});

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  req.body.founder = {
    name:req.body.foundername,
    avatar:req.body.founderavatar
  }
  const product = await productDb.findByIdAndUpdate(req.body.id, req.body);
  res.status(200).json({
    success: true,
    message: "Product updates successfully",
    product,
  });
});

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const Product = await productDb.findByIdAndRemove(req.body.id);
  res.status(201).json({
    success: true,
    message: "Product created successfully",
    Product,
  });
});

exports.getProduct = catchAsyncErrors(async (req, res) => {
  const products = await productDb.find({});
  await res.status(201).json({
    success: true,
    message: "Product created successfully",
    products,
  });
});

exports.getProductId = catchAsyncErrors(async (req, res) => {
  const products = await productDb.findById(req.params.id);
  await res.status(201).json({
    success: true,
    message: "Product created successfully",
    products,
  });
});