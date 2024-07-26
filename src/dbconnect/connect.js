const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/event-management").then(() => {
    console.log("mongodb is connected");
}).catch(() => {
    console.log("mongodb is not connected");
});