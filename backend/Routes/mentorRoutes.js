const express = require("express");
const { signup } = require('../Controllers/mentorRegistrationController');
const { signin } = require('../Controllers/mentorRegistrationController');
const { mentorset } = require('../Controllers/mentorRegistrationController');
const { getMentorProfiles } = require('../Controllers/mentorRegistrationController');
const { getmentor  } = require('../Controllers/mentorRegistrationController');
const mtrrouter = express.Router();
mtrrouter.post("/signup",signup);
mtrrouter.post("/signin",signin);
mtrrouter.post("/mentorset" , mentorset)
mtrrouter.get("/getmentor" , getmentor)
mtrrouter.get("/getallmentor" , getMentorProfiles)
module.exports = mtrrouter;
