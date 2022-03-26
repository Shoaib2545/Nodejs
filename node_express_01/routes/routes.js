const express = require("express");

const router = express.Router(); 
router.post("/",(req,res,next)=>{
    res.send("from post");
});

router.get("/",(req,res,next)=>{
    res.send("from get");
});

exports = router;