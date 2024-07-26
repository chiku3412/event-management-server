const express =  require("express");
require("./dbconnect/connect");
const port = process.env.PORT || 5000
const app = express();
const cors = require('cors');

// const corsOptions ={
//     origin:'http://localhost:8081', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
app.use(cors());

const userRouter = require("./router/userRouter");
const productRouter = require("./router/productRouter");
const eventRouter = require("./router/eventRouter");
const contactRouter = require("./router/contactRouter");
const galleryRouter = require("./router/galleryRouter");

app.use(express.json());
app.use(userRouter);
app.use(productRouter);
app.use(eventRouter);
app.use(contactRouter);
app.use(galleryRouter);

app.listen(port,() => {
    console.log("this site port number "+port);
});