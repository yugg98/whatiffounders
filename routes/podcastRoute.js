const express = require("express");
const {createPodcast,deletePodcast,getPodcast,updatePodcast,getPodcastId} = require("../controllers/podcastController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route('/podcast/create').post(isAuthenticatedUser,createPodcast)
router.route('/podcast/delete').delete(isAuthenticatedUser,deletePodcast)
router.route('/podcast/get').get(getPodcast)
router.route('/podcast/update').put(isAuthenticatedUser,updatePodcast)
router.route('/podcast/get/:id').get(getPodcastId)

module.exports = router;