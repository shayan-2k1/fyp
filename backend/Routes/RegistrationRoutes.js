const express = require("express");
const { signup } = require('../Controllers/studentRegistrationController');
const { signin } = require('../Controllers/studentRegistrationController');
const { update } = require('../Controllers/studentRegistrationController');
const stdrouter = express.Router();
stdrouter.post("/signup",signup);

stdrouter.post("/signin",signin);
stdrouter.put("/update" , update)
module.exports = stdrouter;
