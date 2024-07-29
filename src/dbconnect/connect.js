const mongoose = require("mongoose");
// mongodb://localhost:27017/event-management
mongoose.connect("mongodb+srv://admin:123@cluster0.zljsekw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("mongodb is connected");
}).catch(() => {
    console.log("mongodb is not connected");
});