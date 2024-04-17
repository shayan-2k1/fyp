const express = require("express");
const {createScholarship, getAllScholarships,getOneScholarship} = require("../Controllers/scholarshipPostController") 
const scholarshipPostRouter = express.Router(); 
scholarshipPostRouter.post("/postS" ,createScholarship)
scholarshipPostRouter.get("/getS" , getAllScholarships)
scholarshipPostRouter.get("/scholarships/:scholarshipId" , getOneScholarship)
console.log("in router ")
// scholarshipRouter.get("/getsave",getSavedScholarships)
module.exports = scholarshipPostRouter