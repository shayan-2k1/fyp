const express = require("express");
const {shortlistedScholarship,showShortlisted} = require("../Controllers/shortlistController") 
const shortlistRouter = express.Router();

shortlistRouter.get("/showShortlisted",showShortlisted)
shortlistRouter.post("/shortlistStudent",shortlistedScholarship);


module.exports=shortlistRouter