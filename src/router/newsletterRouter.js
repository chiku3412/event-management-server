const express = require("express");
const router = express.Router();
const { addNewsletterData, getNewsletterData, deleteNewsletterData } = require("../controller/newsletterController");

router.post("/addNewsletterData",addNewsletterData); 
router.get("/getNewsletterData",getNewsletterData); 
router.delete("/deleteNewsletterData/:id",deleteNewsletterData); 

module.exports = router;