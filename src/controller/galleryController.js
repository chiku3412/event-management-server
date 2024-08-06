const galleryData = require("../model/galleryModel");
const multer = require('multer');

const getGalleryImage = async (req, res) => {
    try {
        const findData = await galleryData.find();
        res.status(200).send(findData);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

const addGalleryImage = async (req, res) => {
    try {
        const { eventImage } = req.body;
        const create = new galleryData();
        if (req.files && req.files.eventImage) {
            create.eventImage = req.files.eventImage[0].path.replace(/\\/g, '/').replace(/^.*[\\\/]/, '');
        }
        const response = await create.save();
        res.status(201).send(response);
    } catch (error) {
        res.status(401).send(error.message);
    }   
}

const deleteGalleryImage = async (req, res) => {
    try {
        const _id  = req.params.id;
        const deleteImageData = await galleryData.findByIdAndDelete(_id);
        res.status(200).send(deleteImageData);
    }
    catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = { getGalleryImage, addGalleryImage, deleteGalleryImage };