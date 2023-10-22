const express = require("express");
const {studyPrefrences} = require("../Controllers/studyInterestController") 
const studyPrefRouter = express.Router(); 
studyPrefRouter.post("/info" ,studyPrefrences )

module.exports = studyPrefRouter