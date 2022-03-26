const express = require("express");
const app = express();

const router = require("./routes/routes");

app.use("/",(req,res,next)=>{
    console.log("hello world");
    next();
});
app.use((req,res,next)=>{
    res.send(req.url);
});

app.listen(3000);