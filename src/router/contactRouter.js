const express = require("express");
const router = express.Router();
const { addContact, getContact, deleteContactData } = require("../controller/contactController");

router.post("/addContact", addContact);
router.get("/getContact",getContact);
router.delete("/deleteContactData/:id",deleteContactData);

module.exports = router;