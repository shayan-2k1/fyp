
// const express = require("express");
// const {personalInfo} = require("../Controllers/personalInfoController") 
// const personalInfoRouter = express.Router(); 
// personalInfoRouter.post("/info" ,personalInfo )

const express = require("express");
const {personalInfo} = require("../Controllers/personalInfoController") 
const personalInfoRouter = express.Router(); 
personalInfoRouter.post("/infos" ,personalInfo )
module.exports = personalInfoRouter

