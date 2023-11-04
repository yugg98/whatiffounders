const express = require("express");
const { isAuthenticatedUser } = require("../middleware/auth");
const { createCategory, getCategory, updateCategory, deleteCategory } = require("../controllers/categoryController");

const router = express.Router();

router.route('/category/create').post(isAuthenticatedUser,createCategory)
router.route('/category/get').get(getCategory)
router.route('/category/update').get(isAuthenticatedUser,updateCategory)
router.route('/category/delete').get(isAuthenticatedUser,deleteCategory)

module.exports = router;