const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    eventName:{
        type:String
    },
    eventLocation:{
        type:String
    },
    eventImage:{
        type:String
    },
    eventDescription:{
        type:String
    }
});

const eventList = mongoose.model("eventList",eventSchema);

module.exports = eventList;