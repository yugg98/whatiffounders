const express = require("express");
const { isAuthenticatedUser } = require("../middleware/auth");
const { createCategory, getCategory, updateCategory, deleteCategory, getCategoryById } = require("../controllers/categoryController");

const router = express.Router();

router.route('/category/create').post(isAuthenticatedUser,createCategory)
router.route('/category/get').get(getCategory)
router.route('/category/get/:id').get(getCategoryById)
router.route('/category/update').post(isAuthenticatedUser,updateCategory)
router.route('/category/delete').delete(isAuthenticatedUser,deleteCategory)

module.exports = router;