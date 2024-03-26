const express = require("express");
const {studyPrefrences, getInterest} = require("../Controllers/studyInterestController") 
const studyPrefRouter = express.Router(); 
studyPrefRouter.post("/info" ,studyPrefrences )
studyPrefRouter.get("/getStudyInterest", getInterest)

module.exports = studyPrefRouter