const express = require("express");
const {academicBackground,getAcademicBackground} = require("../Controllers/academicController") 
const academicInfoRouter = express.Router(); 
academicInfoRouter.post("/info" ,academicBackground )
academicInfoRouter.get("/get-ac" ,getAcademicBackground )
module.exports = academicInfoRouter