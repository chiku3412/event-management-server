const express = require("express");
const router = express.Router();
const { getEvent, addEvent, deleteEventList } = require("../controller/eventController");

router.post("/addEvent", addEvent);
router.get("/getEvent",getEvent);
router.delete("/deleteEventList/:id",deleteEventList);

module.exports = router;