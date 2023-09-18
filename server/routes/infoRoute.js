const express = require("express");
const {contactus,getcontact} = require("../controllers/contactusController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route('/contact/create').post(contactus)
router.route('/contact/get').get(getcontact)


module.exports = router;