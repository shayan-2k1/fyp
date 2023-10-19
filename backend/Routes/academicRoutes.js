const express = require("express");
const {academicBackground} = require("../Controllers/academicController") 
const academicInfoRouter = express.Router(); 
academicInfoRouter.post("/info" ,academicBackground )

module.exports = academicInfoRouter