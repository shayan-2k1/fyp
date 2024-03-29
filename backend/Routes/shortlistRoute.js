const express = require("express");
const {shortlistedScholarship, showShortlisted} = require ("../Controllers/shortlistController")
const {tracking, getLink} = require("../Controllers/trackappController")
const shortlistRoute = express.Router()
shortlistRoute.post("/shortlistStudent" , shortlistedScholarship)
shortlistRoute.get("/tracking", tracking)
shortlistRoute.get("/link" , getLink)
shortlistRoute.get("/showShortlisted" , showShortlisted)
module.exports=shortlistRoute;