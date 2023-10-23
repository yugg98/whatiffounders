const express = require("express");
const {createNews,deleteNews,getNews,updateNews,getNewsId} = require("../controllers/newsController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route('/news/create').post(isAuthenticatedUser,createNews)
router.route('/news/delete').delete(isAuthenticatedUser,deleteNews)
router.route('/news/get').get(getNews)
router.route('/news/get/:id').get(getNewsId)
router.route('/news/update').put(isAuthenticatedUser,updateNews)

module.exports = router;