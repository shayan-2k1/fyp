const express = require("express");
const {scholarship,getSavedScholarships, getScholarshipsUni} = require("../Controllers/scholarshipController") 
const scholarshipRouter = express.Router(); 
scholarshipRouter.get("/get", getScholarshipsUni)
scholarshipRouter.post("/save" ,scholarship)
scholarshipRouter.get("/getsave",getSavedScholarships)
module.exports = scholarshipRouter