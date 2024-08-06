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
    bannerImage:{
        type:String
    },
    eventType:{
        type:String
    },
    eventDescription:{
        type:String
    },
    eventItem:{
        type:String
    },
    clientName:{
        type:String
    },
    clientReview:{
        type:String
    }
});

const eventList = mongoose.model("eventList",eventSchema);

module.exports = eventList;