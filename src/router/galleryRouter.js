const express = require("express");
const router = express.Router();
const { getGalleryImage, addGalleryImage, deleteGalleryImage } = require("../controller/galleryController");

router.get("/getGalleryImage",getGalleryImage); 
router.post("/addGalleryImage",addGalleryImage); 
router.delete("/deleteGalleryImage/:id",deleteGalleryImage); 

module.exports = router;