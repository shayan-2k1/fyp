const express = require("express");
const {scholarship,getSavedScholarships} = require("../Controllers/scholarshipController") 
const scholarshipRouter = express.Router(); 
scholarshipRouter.post("/save" ,scholarship)
scholarshipRouter.get("/getsave",getSavedScholarships)
module.exports = scholarshipRouter