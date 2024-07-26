const galleryData = require("../model/galleryModel");

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
        const create = new galleryData({
            eventImage: req.body.eventImage,
        });
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