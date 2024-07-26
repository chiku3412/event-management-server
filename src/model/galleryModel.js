const mongoose = require("mongoose");

const gallerySchema = mongoose.Schema({
    eventImage:{
        type:String,
        required: false,
    }
});

const galleryData = mongoose.model("galleryData",gallerySchema);

module.exports = galleryData;