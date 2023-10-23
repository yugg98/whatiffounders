const express = require("express");
const {createEvents,deleteEvents,getEvents,updateEvents,getEventsId} = require("../controllers/eventController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route('/event/create').post(isAuthenticatedUser,createEvents)
router.route('/event/delete').delete(isAuthenticatedUser,deleteEvents)
router.route('/event/get').get(getEvents)
router.route('/event/get/:id').get(getEventsId)
router.route('/event/update').put(isAuthenticatedUser,updateEvents)

module.exports = router;