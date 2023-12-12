const express = require("express");
const {scholarship} = require("../Controllers/scholarshipController") 
const personalInfoRouter = express.Router(); 
personalInfoRouter.post("/save" ,scholarship)
module.exports = personalInfoRouter