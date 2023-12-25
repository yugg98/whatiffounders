const express = require("express");
const { isAuthenticatedUser } = require("../middleware/auth");
const { createProduct,deleteProduct,getProduct,updateProduct,getProductId } = require("../controllers/productController");

const router = express.Router();

router.route('/product/create').post(isAuthenticatedUser,createProduct)
router.route('/product/delete').delete(isAuthenticatedUser,deleteProduct)
router.route('/product/get').get(getProduct)
router.route('/product/update').put(isAuthenticatedUser,updateProduct)
router.route('/product/get/:id').get(getProductId)

module.exports = router;