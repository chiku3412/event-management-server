const express = require("express");
const router = express.Router();
const { getGalleryImage, addGalleryImage, deleteGalleryImage } = require("../controller/galleryController");
const { upload } = require("../middleware/upload");

router.get("/getGalleryImage",getGalleryImage); 
router.post("/addGalleryImage", upload.fields([{ name: 'eventImage', maxCount: 1 }]), addGalleryImage); 
router.delete("/deleteGalleryImage/:id",deleteGalleryImage); 

module.exports = router;