const express = require("express");
const {login,checkLoginToken, googleLogin} = require('../controllers/userController')
const router = express.Router();

router.route('/user/login').post(login)
router.route('/user/checklogintoken').post(checkLoginToken)
router.route('/user/googlelogin').post(googleLogin)


module.exports = router;
