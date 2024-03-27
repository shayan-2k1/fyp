const express = require("express");
const {shortlistedScholarship} = require ("../Controllers/shortlistController")
const shortlistRoute = express.Router()
shortlistRoute.post("/shortlistStudent" , shortlistedScholarship)

module.exports=shortlistRoute;