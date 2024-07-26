const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    contactNumber:{
        type:String
    },
    email:{
        type:String
    },
    eventName:{
        type:String
    },
    destination:{
        type:String
    }
});

const contactData = mongoose.model("contactData",contactSchema);

module.exports = contactData;