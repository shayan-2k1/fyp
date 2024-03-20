const express = require("express");
const {createScholarship, getAllScholarships} = require("../Controllers/scholarshipPostController") 
const scholarshipPostRouter = express.Router(); 
scholarshipPostRouter.post("/postS" ,createScholarship)
scholarshipPostRouter.get("/getS" , getAllScholarships)
console.log("in router ")
// scholarshipRouter.get("/getsave",getSavedScholarships)
module.exports = scholarshipPostRouter