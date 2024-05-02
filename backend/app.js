const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./Routes/UserRoutes")
const cookieParser = require("cookie-parser");
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();


app.use( cors())
app.use(express.json());

app.use(cookieParser());


dotenv.config();            // for connecting .envv


// paths 
app.use("/api" , userRoute );




app.get("/" ,( req,res)=>{
    res.send("Hello, world!");
});






// badabase 
let PORT = 4000;

mongoose.connect("mongodb+srv://yogesh:9891334343@cluster0.cwssmjt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then((req,res)=>{
    app.listen(PORT);
    console.log('Db connected');

}).then((req,res)=>{
    console.log('listening on port', PORT)
}).catch((err)=>{
    console.log("DB not connected");
})