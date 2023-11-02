const express = require("express");
const {getHome} = require("../controllers/homeController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router()

router.route('/home/get').get(getHome);

module.exports = router;