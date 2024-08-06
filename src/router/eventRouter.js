const express = require("express");
const router = express.Router();
const { getEvent, addEvent, deleteEventList, getEventById } = require("../controller/eventController");
const { upload } = require("../middleware/upload");

router.post("/addEvent", upload.fields([{ name: 'eventImage', maxCount: 1 }, { name: 'bannerImage', maxCount: 1 }]), addEvent);
router.get("/getEvent", getEvent);
router.delete("/deleteEventList/:id", deleteEventList);
router.get("/getEvent/:id", getEventById);

module.exports = router;
