const express = require("express");
const {scholarship} = require("../Controllers/scholarshipController") 
const scholarshipRouter = express.Router(); 
scholarshipRouter.post("/save" ,scholarship)
module.exports = scholarshipRouter