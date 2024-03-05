const express = require("express");
const {createScholarship} = require("../Controllers/scholarshipPostController") 
const scholarshipPostRouter = express.Router(); 
scholarshipPostRouter.post("/postS" ,createScholarship)
console.log("in router ")
// scholarshipRouter.get("/getsave",getSavedScholarships)
module.exports = scholarshipPostRouter