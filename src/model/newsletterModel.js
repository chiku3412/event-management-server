const mongoose = require("mongoose");

const newsletterSchema = mongoose.Schema ({
    newsletterMail: String
});

const newsletterData = mongoose.model("newsletterData", newsletterSchema);
module.exports = newsletterData;