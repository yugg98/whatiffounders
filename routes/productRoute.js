const express = require("express");
const { isAuthenticatedUser } = require("../middleware/auth");
const { createProduct } = require("../controllers/productController");

const router = express.Router();

router.route('/product/create').post(isAuthenticatedUser,createProduct)
// router.route('/product/delete').delete(isAuthenticatedUser,deletePodcast)
// router.route('/product/get').get(getPodcast)
// router.route('/product/update').put(isAuthenticatedUser,updatePodcast)

module.exports = router;